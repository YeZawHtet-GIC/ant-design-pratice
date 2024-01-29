import logo from "./logo.svg";
import "./App.css";
import { Button, FloatButton, Divider, Flex, Segmented } from "antd";
import { QuestionCircleOutlined, SyncOutlined } from "@ant-design/icons";
import { useState } from "react";

function App() {
  const boxStyle = {
    width: "100%",
    height: 120,
    borderRadius: 6,
    border: "1px solid #40a9ff",
  };
  const justifyOptions = [
    "flex-start",
    "center",
    "flex-end",
    "space-between",
    "space-around",
    "space-evenly",
  ];
  const alignOptions = ["flex-start", "center", "flex-end"];
  const [justify, setJustify] = useState(justifyOptions[0]);
  const [align, setAlign] = useState(alignOptions[0]);
  return (
    <div className="App">
      <h1>Type of Buttons</h1>
      <Button type="primary">Primary Button</Button>
      <Button type="default">Default Button</Button>
      <Button type="dashed">Dashed Button</Button>
      <Button type="text">Text Button</Button>
      <Button type="default">Danger Button</Button>
      <Button type="default" ghost>
        Ghost Button
      </Button>
      <Button type="default" disabled>
        Disabled Button
      </Button>
      <Divider orientation="left" type="verticle" plain>
        verticle Divider
      </Divider>
      <Button type="default" size="small" loading>
        Loading with small Button
      </Button>
      <Button type="default" size="large" loading>
        Loading with Large Button
      </Button>
      <Divider plain>Text</Divider>
      <h1>Type of Divider</h1>
      <FloatButton onClick={() => console.log("onClick")} />
      <FloatButton
        icon={<QuestionCircleOutlined />}
        type="primary"
        style={{
          right: 24,
        }}
      />
      <FloatButton
        icon={<QuestionCircleOutlined />}
        type="default"
        style={{
          right: 100,
        }}
      />
      <FloatButton
        shape="square"
        icon={<QuestionCircleOutlined />}
        type="default"
        style={{
          right: 150,
        }}
      />

      <FloatButton.BackTop />
      <FloatButton.Group
        shape="square"
        style={{
          right: 94,
        }}
      >
        <FloatButton icon={<QuestionCircleOutlined />} />
        <FloatButton />
        <FloatButton icon={<SyncOutlined />} />
        <FloatButton.BackTop visibilityHeight={0} />
      </FloatButton.Group>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
        merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
        quo modo.
      </p>
      <Divider plain>Text</Divider>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
        merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
        quo modo.
      </p>
      <Divider orientation="left" plain>
        Left Text
      </Divider>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
        merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
        quo modo.
      </p>
      <Divider orientation="right" plain>
        Right Text
      </Divider>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
        merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
        quo modo.
      </p>
      <p>Select Justify:</p>
      <Segmented options={justifyOptions} onChange={setJustify} />
      <p>Select Align:</p>
      <Segmented options={alignOptions} onChange={setAlign} />
      <Flex style={boxStyle} justify={justify} align={align}>
        <Button type="primary">Primary</Button>
        <Button type="primary">Primary</Button>
        <Button type="primary">Primary</Button>
        <Button type="primary">Primary</Button>
      </Flex>
    </div>
  );
}
export default App;
