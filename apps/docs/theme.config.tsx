import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const logo = (size: number = 0) => (
  <span className="inline-flex items-center gap-2">
    <svg
      width="100%"
      height={size}
      viewBox="0 0 450 650"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 150C0 67.1573 67.1573 0 150 0H300C382.843 0 450 67.1573 450 150V300C450 382.843 382.843 450 300 450H50C22.3858 450 0 427.614 0 400V150ZM150 225C150 201.703 150 190.054 153.806 180.866C158.881 168.614 168.614 158.881 180.866 153.806C190.054 150 201.703 150 225 150C248.297 150 259.946 150 269.134 153.806C281.386 158.881 291.119 168.614 296.194 180.866C300 190.054 300 201.703 300 225C300 248.297 300 259.946 296.194 269.134C291.119 281.386 281.386 291.119 269.134 296.194C259.946 300 248.297 300 225 300C201.703 300 190.054 300 180.866 296.194C168.614 291.119 158.881 281.386 153.806 269.134C150 259.946 150 248.297 150 225ZM3.80602 530.866C0 540.054 0 551.703 0 575C0 598.297 0 609.946 3.80602 619.134C8.88072 631.386 18.6144 641.119 30.8658 646.194C40.0544 650 51.7029 650 75 650C98.2971 650 109.946 650 119.134 646.194C131.386 641.119 141.119 631.386 146.194 619.134C150 609.946 150 598.297 150 575C150 551.703 150 540.054 146.194 530.866C141.119 518.614 131.386 508.881 119.134 503.806C109.946 500 98.2971 500 75 500C51.7029 500 40.0544 500 30.8658 503.806C18.6144 508.881 8.88072 518.614 3.80602 530.866Z"
        fill="#5551DC"
      />
    </svg>
    <span className="font-semibold flex-shrink-0 text-xl text-zinc-900">
      Piksel UI
    </span>
  </span>
);

const config: DocsThemeConfig = {
  logo: () => logo(36),
  project: {
    // link: "https://piksel.design",
    icon: () => logo(24),
  },
  chat: {
    // link: "https://discord.com",
  },
  docsRepositoryBase: "https://github.com/shuding/nextra-docs-template",
  footer: {
    text: "Piksel UI",
  },
};

export default config;
