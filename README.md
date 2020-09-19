# React simple input mask for brazilian zipcode format.

Simple \<input /> wrapper to mask the value with a BR zipcode mask. \
It will apply all the props given to it, to an input field, enabling any customization.

![ttystrudio GIF](https://imgur.com/uclg8Ad.gif)

## Installation

```shell
$ yarn add react-simple-cep-mask
```

## Example

```JSX
import React, { useState } from "react";
import ReactDOM from "react-dom";
import Cep from "react-simple-cep-mask";

const App = () => {
  const [cep, setCep] = useState("");
  return (
    <>
      <h2>Simple cep mask </h2>
      <br />
      <Cep
        value={cep}
        onChange={ (cep) => setCep(cep) } />
      <br />
      <h4>Masked value: {cep}</h4>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

```

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
- Copyright 2015 © <a href="http://fvcproductions.com" target="_blank">FVCproductions</a>.
