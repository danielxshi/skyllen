const POST_GRAPHQL_FIELDS = `
  slug
  title
  coverImage {
    url
  }
  projectImageOne {
    url
  }
  projectImageTwo {
    url
  }
  projectImageThree {
    url
  }
  projectImageFour {
    url
  }
  projectImageFive {
    url
  }
  render {
    url
  }
  projectImageOneText
  projectImageTwoText
  projectImageThreeText
  projectImageFourText
  projectImageFiveText
  projectTextBubbleOne
  projectTextBubbleTwo
  projectTextBubbleThree
  projectTextBubbleFour
  projectTextBubbleFive
  projectTextBubbleSix
  projectPreviewDescription
  website
  date
  author {
    name
    picture {
      url
    }
  }
  projectDetails 
  excerpt
  content {
    json
    links {
      assets {
        block {
          sys {
            id
          }
          url
          description
        }
      }
    }
  }
`;

async function fetchGraphQL(query: string, preview = false): Promise<any> {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
      next: { tags: ["posts"] },
    }
  ).then((response) => response.json());
}

function extractPost(fetchResponse: any): any {
  return fetchResponse?.data?.postCollection?.items?.[0];
}

function extractPostEntries(fetchResponse: any): any[] {
  return fetchResponse?.data?.postCollection?.items;
}

export async function getPreviewPostBySlug(slug: string | null): Promise<any> {
  const entry = await fetchGraphQL(
    `query {
      postCollection(where: { slug: "${slug}" }, preview: true, limit: 1) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    true
  );
  return extractPost(entry);
}

export async function getAllPosts(isDraftMode: boolean): Promise<any[]> {
  return await getAllPostsLocalized(true, isDraftMode);
}

export async function getPostAndMorePosts(
  slug: string,
  preview: boolean
): Promise<any> {
  return await getPostAndMorePostsLocalized(true, slug, preview);
}

export async function getAllPostsLocalized(
  isEnglish: boolean,
  isDraftMode: boolean
  ): Promise<any[]> {
    const entries = await fetchGraphQL(
      `query {
        postCollection(where: { slug_exists: true }, order: date_DESC, 
          locale: ${isEnglish ? '"en-US"' : '"zh-CN"'},
          preview: ${
          isDraftMode ? "true" : "false"
        }) {
          items {
            ${POST_GRAPHQL_FIELDS}
          }
        }
      }`,
      isDraftMode,
    );
  


  
    return extractPostEntries(entries);
}

export async function getPostAndMorePostsLocalized(
  isEnglish: boolean,
  slug: string,
  preview: boolean
): Promise<any> {
  const entry = await fetchGraphQL(
    `query {
      postCollection(where: { slug: "${slug}" }, 
      preview: ${
        preview ? "true" : "false"
      }, 
      limit: 1,
      locale: ${isEnglish ? '"en-US"' : '"zh-CN"'}
      ) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  );
  const entries = await fetchGraphQL(
    `query {
      postCollection(where: { 
        slug_not_in: "${slug}" 
      }, 
      order: date_DESC, 
      preview: ${
        preview ? "true" : "false"
      }, 
      limit: 2,
      locale: ${isEnglish ? '"en-US"' : '"zh-CN"'}) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  );



  
  return {
    post: extractPost(entry),
    morePosts: extractPostEntries(entries),
  };
}