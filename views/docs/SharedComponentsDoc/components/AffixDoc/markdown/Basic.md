```jsx
import React from "react";
// import { Affix } from 'components/AfterAuth/shared'
import { Button } from "components/AfterAuth/ui";
const Affix = dynamic(() => import("components/AfterAuth/shared"), {
  ssr: false,
});
const Basic = () => {
  return (
    <div className="flex flex-col justify-between">
      <Affix className="z-50">
        <Button variant="solid">This will stick to top</Button>
      </Affix>
    </div>
  );
};

export default Basic;
```
