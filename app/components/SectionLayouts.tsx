"use client";
import {
  breakpoints,
  useAllBreakpoints,
  useBreakpoint,
  useBreakpointValues,
} from "@/app/hooks/useBreakpoints";
import StickyContainer from "@/app/components/ScrollContainer/StickyContainer";
import MainGrid from "../MainGrid";
import { motion } from "framer-motion";
import Sticky from "@/app/components/ScrollContainer/Sticky";
import { useMemo } from "react";

type SectionLayoutProps = {
  children: React.ReactNode;
  padding?: boolean;
  fullScreen?: boolean;
};

export const SectionLayout = ({
  children,
  padding,
  fullScreen,
}: SectionLayoutProps) => {
  //TODO: Implement lazy loading states for the page content for optimisation
  return (
    <section className={`${fullScreen ? "" : "px-grid-margin-x"} pb-8`}>
      <StickyContainer>
        {!fullScreen && (
          <MainGrid
            className={`${padding ? "relative mt-24 md:mt-64" : "relative"}`}
          >
            {children}
          </MainGrid>
        )}
        {fullScreen && children}
      </StickyContainer>
    </section>
  );
};

type SectionCopyProps = {
  children: React.ReactNode;
  sticky?: boolean;
  stickyOnMobile?: boolean;
  left?: boolean;
  right?: boolean;
  padding?: boolean;
  fadeIn?: boolean;
};

export const SectionInfo = ({
  children,
  sticky,
  stickyOnMobile,
  left,
  right,
  padding,
  fadeIn,
}: SectionCopyProps) => {
  const atBreakpointMD = useBreakpoint(breakpoints.md);
  const shouldStick = sticky && (atBreakpointMD || stickyOnMobile);

  const breakpoint2XLRight = "2xl:col-span-2 2xl:col-start-7";
  const breakpointXLRight = "xl:col-span-2 xl:col-start-7";
  const breakpointLRight = "l:gcol-span-2 lg:col-start-5";
  const breakpointMRight = "md:col-span-2 md:col-start-4";

  const breakpoint2XL = "2xl:col-span-2 2xl:col-start-2";
  const breakpointXL = "xl:col-span-3 xl:col-start-2";
  const breakpointL = "lg:col-span-2 lg:col-start-2 lg:top-[28px]";
  const breakpointM = "md:col-span-2 md:col-start-2";
  const breakpointS = "sm:col-span-2 sm:col-start-1";
  const breakpointXS = "col-span-full col-start-1";

  const stickyOffset = useBreakpointValues({
    default: "48px",
    sm: "88px",
  });

  return (
    <motion.div
      className={`
      ${left ? " h-fit " : "z-10  h-fit"} 
      ${right ? breakpoint2XLRight : breakpoint2XL} 
      ${right ? breakpointXLRight : breakpointXL} 
      ${right ? breakpointLRight : breakpointL} 
      ${right ? breakpointMRight : breakpointM} 
      ${breakpointS} 
      ${breakpointXS} 
      ${shouldStick || stickyOnMobile ? "sticky" : ""}
      }`}
      style={{
        top: (shouldStick || stickyOnMobile) && stickyOffset,
      }}
    >
      {shouldStick && (
        <Sticky
          top={stickyOnMobile && !atBreakpointMD ? stickyOffset : 28}
          fadeOut
          fadeIn={fadeIn}
        >
          {children}
        </Sticky>
      )}
      {!shouldStick && children}
    </motion.div>
  );
};

export const SectionInfoHeader = (props: any) => (
  <h3 className="mb-1 text-lead-mobile sm:text-lead-tablet xl:text-lead">
    {props.children}
  </h3>
);
export const SectionInfoDescription = (props: any) => (
  <h3 className="text-lead-mobile opacity-50 sm:text-lead-tablet xl:text-lead">
    {props.children}
  </h3>
);
