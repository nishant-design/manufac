import { data } from "../data";

type DecorateData = {
  alcohol: number;
  malicAcid: number[]
}

const useBarChart = () => {
  // getting all the types of alcohol in an array
  const alcoholTypes: number[] = [];
  data.forEach((item) => {
    if (!alcoholTypes.includes(item.Alcohol)) {
      alcoholTypes.push(item.Alcohol);
    }
  });

  // sorting and decorating data based on alcohol type
  const decorateData: DecorateData[] = alcoholTypes.map((item: number) => {
    const malicAcid: number[] = [];
    data.forEach((val) => {
      if (val.Alcohol === item) {
        malicAcid.push(val["Malic Acid"]);
      }
    });
    return { alcohol: item, malicAcid };
  });

  const xAxisData: string[] = decorateData.map((obj: any) => `Alcohol ${obj.alcohol}`);
  const yAxisData: number[] = decorateData.map(
    (obj: any) => obj.malicAcid.reduce((acc: any, item: any) => acc + item, 0) / obj.malicAcid.length
  );

  const barChartOptions = {
    color: ['#f59842'],
    xAxis: {
      type: "category",
      data: xAxisData,
      name: "Alchohol Types",
      nameLocation: "center",
      nameGap: 25,
      nameTextStyle: {
        fontSize: 16,
        fontWeight :'bold',
      }
    },
    yAxis: {
      type: "value",
      name: "Malic Acid (Average)",
      nameLocation: "center",
      nameGap: 25,
      nameTextStyle: {
        fontSize: 16,
        fontWeight :"bold",
      },
    },
    series: [
      {
        data: yAxisData,
        type: "bar",
        smooth: true,
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(180, 180, 180, 0.2)'
        },
      }
    ],
    tooltip: {
      trigger: "axis"
    }
  }

  return {xAxisData, yAxisData, barChartOptions};
};

export default useBarChart;
