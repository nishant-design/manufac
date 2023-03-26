import { data } from "../data";

const useScatterPlot = () => {

  // making array  of arrays of values of color intensity & hue
  const decorateData: number[][] = [];
  data.forEach((item: any, i: any) => {
    const arr = [];
    arr.push(item["Color intensity"]);
    arr.push(item["Hue"]);
    decorateData.push(arr);
  });

  const scatterPlotOptions = {
    color: ["#f59842"],
    xAxis: {
      name: "Color Intensity",
      nameLocation: "center",
      nameGap: 25,
      nameTextStyle: {
        fontSize: 16,
        fontWeight: "bold",
      },
    },
    yAxis: {
      name: "Hue",
      nameLocation: "center",
      nameGap: 25,
      nameTextStyle: {
        fontSize: 16,
        fontWeight: "bold",
      },
    },
    series: [
      {
        symbolSize: 15,
        data: decorateData,
        type: "scatter",
      },
    ],
  };
  return { scatterPlotOptions };
};

export default useScatterPlot;
