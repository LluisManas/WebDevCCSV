import React from "react";

class ShowResults extends React.Component {
  render() {
    const { results, darkMode } = this.props;

    return (
      <ol>
        {results.map((product, i) => {
          return (
            <li key={i} className={darkMode ? "liDark" : "liLight"}>
              {product.name}
              <br />
              Sphere: {product.maxSphere} to {product.minSphere}
              <br />
              Cylinder: {product.maxCylinder} to {product.minCylinder}
              <br />
              Addition: {product.maxAddition} to {product.minAddition}
            </li>
          );
        })}
      </ol>
    );
  }
}

export default ShowResults;
