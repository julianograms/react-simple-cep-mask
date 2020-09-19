import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Cep = (props) => {
  const MASK = "99999-999";
  const MAX_LENGTH = clear(MASK).length;

  const { onChange } = props;

  let value = clear(props.value);

  if (value) {
    value = applyMask(value, MASK);
  }

  function shouldSearchCep(cep) {
    return cep.length === MAX_LENGTH;
  }

  function searchCep(value) {
    return fetch(`${props.url}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cep: value }),
    })
      .then((response) => {
        if (response.status !== 200) {
          throw new Error("No cep found");
        }
        return response;
      })
      .then((response) => {
        return response.json();
      });
  }

  function onLocalChange(ev) {
    let newValue = clear(ev.target.value);

    let nextLength = newValue.length;

    if (nextLength > MAX_LENGTH) return;

    const maskedValue = applyMask(newValue, MASK);
    onChange(maskedValue);
    if (props.onSearch && shouldSearchCep(newValue)) {
      searchCep(newValue)
        .then((res) => {
          res.cep = maskedValue;
          console.log(res);
          props.onSearch(res);
        })
        .catch((err) => console.log(err));
    }
  }

  function applyMask(value, mask) {
    let result = "";

    let inc = 0;
    Array.from(value).forEach((letter, index) => {
      if (!mask[index + inc].match(/[0-9]/)) {
        result += mask[index + inc];
        inc++;
      }
      result += letter;
    });
    return result;
  }

  function clear(value) {
    return value.replace(/[^0-9]/g, "");
  }

  return <input {...props} type="tel" value={value} onChange={onLocalChange} />;
};

Cep.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  url: PropTypes.string,
  onSearch: PropTypes.func,
};

export default Cep;
