```jsx
import React from "react";
// import { Affix } from 'components/AfterAuth/shared'
import { Button } from "components/AfterAuth/ui";
const Affix = dynamic(() => import("components/AfterAuth/shared"), {
  ssr: false,
});
const Offset = () => {
  return (
    <div className="flex flex-col justify-between">
      <Affix offset={80} className="z-50">
        <Button variant="solid">This will stick to top with 80px offset</Button>
      </Affix>
    </div>
  );
};

export default Offset;
```
