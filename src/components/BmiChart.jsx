import React, { PureComponent } from "react";
import { PieChart, Pie, Cell } from "recharts";

const RADIAN = Math.PI / 180;

const cx = 150;
const cy = 200;
const iR = 50;
const oR = 100;

const needle = (value, data, cx, cy, iR, oR, color) => {
  let total = 0;
  data.forEach((v) => {
    total += v.value;
  });
  const ang = 180.0 * (1 - value / total);
  const length = (iR + 2 * oR) / 3;
  const sin = Math.sin(-RADIAN * ang);
  const cos = Math.cos(-RADIAN * ang);
  const r = 5;
  const x0 = cx + 5;
  const y0 = cy + 5;
  const xba = x0 + r * sin;
  const yba = y0 - r * cos;
  const xbb = x0 - r * sin;
  const ybb = y0 + r * cos;
  const xp = x0 + length * cos;
  const yp = y0 + length * sin;

  return [
    <circle cx={x0} cy={y0} r={r} fill={color} stroke="none" />,
    <path
      d={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`}
      stroke="#none"
      fill={color}
    />,
  ];
};

class BmiChart extends PureComponent {
  render() {
    const { height, weight } = this.props;
    const heightMeter = height / 100;
    const bmiValue = weight / (heightMeter * heightMeter);
    console.log("hello");

    const data = [
      { name: "Underweight", value: 18.5, color: "#fbbf24" },
      { name: "Normal Weight", value: 6, color: "#4ade80" },
      { name: "Overweight", value: 4, color: "#f87171" },
    ];
    const value = bmiValue >= 30 ? 30 : bmiValue; // Cap the BMI value at 30 for obesity
    console.log(height, weight, value, bmiValue);
    return (
      <PieChart width={400} height={500}>
        <Pie
          dataKey="value"
          startAngle={180}
          endAngle={0}
          data={data}
          cx={cx}
          cy={cy}
          innerRadius={iR}
          outerRadius={oR}
          fill="#8884d8"
          stroke="none"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        {needle(value, data, cx, cy, iR, oR, "#111827")}
      </PieChart>
    );
  }
}

export default BmiChart;

// import React, { PureComponent } from "react";
// import { PieChart, Pie, Cell } from "recharts";

// const RADIAN = Math.PI / 180;

// const cx = 150;
// const cy = 200;
// const iR = 50;
// const oR = 100;

// const needle = (value, data, cx, cy, iR, oR, color) => {
//   let total = 0;
//   data.forEach((v) => {
//     total += v.value;
//   });
//   const ang = 180.0 * (1 - value / total);
//   const length = (iR + 2 * oR) / 3;
//   const sin = Math.sin(-RADIAN * ang);
//   const cos = Math.cos(-RADIAN * ang);
//   const r = 5;
//   const x0 = cx + 5;
//   const y0 = cy + 5;
//   const xba = x0 + r * sin;
//   const yba = y0 - r * cos;
//   const xbb = x0 - r * sin;
//   const ybb = y0 + r * cos;
//   const xp = x0 + length * cos;
//   const yp = y0 + length * sin;

//   return [
//     <circle cx={x0} cy={y0} r={r} fill={color} stroke="none" />,
//     <path
//       d={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`}
//       stroke="#none"
//       fill={color}
//     />,
//   ];
// };

// class BmiChart extends PureComponent {
//   render() {
//     const { height, weight } = this.props;
//     const heightMeter = height / 100;
//     const bmiValue = weight / (heightMeter * heightMeter);
//     let value = 30; // Default value for underweight

//     if (bmiValue > 30 && bmiValue <= 60) {
//       value = 30 + (bmiValue - 30) / 2; // Normal weight range
//     } else if (bmiValue > 60) {
//       value = 60 + (bmiValue - 60) / 3; // Overweight range
//     }

//     const data = [
//       { name: "Under Weight", value: 30, color: "#ff0000" },
//       { name: "Normal", value: 30, color: "#00ff00" },
//       { name: "Over Weight", value: 30, color: "#0000ff" },
//     ];

//     return (
//       <PieChart width={400} height={500}>
//         <Pie
//           dataKey="value"
//           startAngle={180}
//           endAngle={0}
//           data={data}
//           cx={cx}
//           cy={cy}
//           innerRadius={iR}
//           outerRadius={oR}
//           fill="#8884d8"
//           stroke="none"
//         >
//           {data.map((entry, index) => (
//             <Cell key={`cell-${index}`} fill={entry.color} />
//           ))}
//         </Pie>
//         {needle(value, data, cx, cy, iR, oR, "#d0d000")}
//       </PieChart>
//     );
//   }
// }

// export default BmiChart;
