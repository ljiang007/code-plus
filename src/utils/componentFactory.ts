import TextRenderer from "@/components/base/text/TextRenderer.vue";
import ImageRenderer from "@/components/base/image/ImageRenderer.vue";
import LayoutRenderer from "@/components/base/layout/layoutRenderer.vue";

interface ComponentItem {
  type: string;
  label: string;
  props?: any;
  children?: ComponentItem[];
  id?: any;
}

interface ComponentMaps {
  basics: ComponentItem[];
  layout: ComponentItem[];
  custom: ComponentItem[];
}

export const componentRendererMap = {
  text: TextRenderer,
  image: ImageRenderer,
  layout: LayoutRenderer,
};
const timestamp = Date.now();

export const componentMaps: ComponentMaps = {
  basics: [
    {
      type: "text",
      label: "文本",
      props: {
        text: "默认文本",
        style: {
          fontSize: "14px",
          color: "#000000",
          margin: "0px",
          padding: "0px",
          textAlign: "left",
        },
        attr: {},
      },
      children: [],
    },
    {
      type: "image",
      label: "图片",
      props: {
        attr: {
          src: "https://static.form-create.com/example.png",
        },
        style: {
          width: "100px",
          height: "100px",
          margin: "0px",
          padding: "0px",
        },
      },
    },
    { type: "button", label: "按钮" },
    { type: "link", label: "链接" },
  ],
  layout: [
    {
      type: "layout",
      label: "栅格布局",
      children: [
        {
          id: timestamp + 1,
          label: "列",
          type: "layout",
          props: {
            attr: { span: 6, offset: 0, push: 0, pull: 0 },
            style: { backgroundColor: "rgba(255,255,255,1)" },
          },
          children: [],
        },
        {
          id: timestamp + 2,
          label: "列",
          type: "layout",
          props: {
            attr: { span: 6, offset: 0, push: 0, pull: 0 },
            style: { backgroundColor: "rgba(255,255,255,1)" },
          },
          children: [],
        },
        {
          id: timestamp + 3,
          label: "列",
          type: "layout",
          props: {
            attr: { span: 6, offset: 0, push: 0, pull: 0 },
            style: { backgroundColor: "rgba(255,255,255,1)" },
          },
          children: [],
        },
        {
          id: timestamp + 4,
          label: "列",
          type: "layout",
          props: {
            attr: { span: 6, offset: 0, push: 0, pull: 0 },
            style: { backgroundColor: "rgba(255,255,255,1)" },
          },
          children: [],
        },
      ],
    },
    { type: "card", label: "卡片布局" },
  ],
  custom: [
    { type: "news", label: "新闻组件" },
    { type: "notice", label: "公告组件" },
    { type: "product", label: "风采组件" },
    { type: "overview", label: "概况组件" },
    { type: "carousel", label: "轮播组件" },
  ],
};
