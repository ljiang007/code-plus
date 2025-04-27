export function getDefaultComponentProps(type: string) {
  const timestamp = Date.now();
  switch (type) {
    case "text":
      return {
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
      };
    case "layout":
      return {
        props: {
          attr: {
            gutter: 0,
            type: "",
            justify: "start",
            align: "",
          },
          style: {},
        },
        children: [
          {
            id: timestamp + 1,
            type: "layout",
            props: {
              attr: { span: 4, offset: 0, push: 0, pull: 0 },
              style: { backgroundColor: "rgba(255,255,255,1)" },
            },
            children: [],
          },
          {
            id: timestamp + 2,
            type: "layout",
            props: {
              attr: { span: 4, offset: 0, push: 0, pull: 0 },
              style: { backgroundColor: "rgba(255,255,255,1)" },
            },
            children: [],
          },
          {
            id: timestamp + 3,
            type: "layout",
            props: {
              attr: { span: 4, offset: 0, push: 0, pull: 0 },
              style: { backgroundColor: "rgba(255,255,255,1)" },
            },
            children: [],
          },
          {
            id: timestamp + 4,
            type: "layout",
            props: {
              attr: { span: 4, offset: 0, push: 0, pull: 0 },
              style: { backgroundColor: "rgba(255,255,255,1)" },
            },
            children: [],
          },
          {
            id: timestamp + 5,
            type: "layout",
            props: {
              attr: { span: 4, offset: 0, push: 0, pull: 0 },
              style: { backgroundColor: "rgba(255,255,255,1)" },
            },
            children: [],
          },
          {
            id: timestamp + 6,
            type: "layout",
            props: {
              attr: { span: 4, offset: 0, push: 0, pull: 0 },
              style: { backgroundColor: "rgba(255,255,255,1)" },
            },
            children: [],
          },
        ],
      };
  }
}
