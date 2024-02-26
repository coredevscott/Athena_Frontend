import { useEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

const LineLiveChart1 = () => {
  useEffect(() => {
    let root = am5.Root.new("chartdiv1");
    root.setThemes([
      am5themes_Animated.new(root)
    ]);

    let value = 100;

    function generateChartData() {
      let chartData = [];
      let firstDate = new Date();
      firstDate.setDate(firstDate.getDate() - 1000);
      firstDate.setHours(0, 0, 0, 0);

      for (var i = 0; i < 16; i++) {
        let newDate = new Date(firstDate);
        newDate.setDate(newDate.getDate() + i);

        value += (Math.random() < 0.5 ? 1 : -1) * Math.random() * 10;

        chartData.push({
          date: newDate.getTime(),
          value: value
        });
      }
      return chartData;
    }

    let data = generateChartData();
    let chart = root.container.children.push(am5xy.XYChart.new(root, {
      focusable: true,
      panX: true,
      panY: true,
      wheelX: "panX",
      wheelY: "zoomX"
    }));

    let easing = am5.ease.linear;
    let xAxis = chart.xAxes.push(am5xy.DateAxis.new(root, {
      maxDeviation: 0.5,
      extraMin: -0.1,
      extraMax: 0.1,
      groupData: false,
      baseInterval: {
        timeUnit: "day",
        count: 1
      },
      renderer: am5xy.AxisRendererX.new(root, {
        minorGridEnabled: true,
        minGridDistance: 60,
        labels: {
          text: {
            fill: am5.color("#ffffff") // Set x-axis label text color to white
          }
        }
      }),
      tooltip: am5.Tooltip.new(root, {})
    }));

    let yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
      renderer: am5xy.AxisRendererY.new(root, {
        labels: {
          fontColor: am5.color("#ffffff") // Set y-axis label text color to white
        }
      })
    }));

    let series = chart.series.push(am5xy.LineSeries.new(root, {
      stroke: am5.color("#30B778"),
      minBulletDistance: 10,
      name: "Series 1",
      xAxis: xAxis,
      yAxis: yAxis,
      valueYField: "value",
      valueXField: "date",
      tooltip: am5.Tooltip.new(root, {
        pointerOrientation: "horizontal",
        labelText: "{valueY}"
      })
    }));
    series.data.setAll(data);

    series.bullets.push(function () {
      return am5.Bullet.new(root, {
        locationX: undefined,
        sprite: am5.Circle.new(root, {
          radius: 4,
          fill: am5.color("#30B778")
        })
      })
    });

    let cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
      xAxis: xAxis
    }));
    cursor.lineY.set("visible", false);

    setInterval(function () {
      addData();
    }, 1500)


    function addData() {
      let lastDataItem = series.dataItems[series.dataItems.length - 1];
      let lastValue = lastDataItem.get("valueY");
      let newValue = value + ((Math.random() < 0.5 ? 1 : -1) * Math.random() * 6);
      let lastDate = new Date(lastDataItem.get("valueX"));
      let time = am5.time.add(new Date(lastDate), "day", 1).getTime();
      series.data.removeIndex(0);
      series.data.push({
        date: time,
        value: newValue
      })

      let newDataItem = series.dataItems[series.dataItems.length - 1];
      newDataItem.animate({
        key: "valueYWorking",
        to: newValue,
        from: lastValue,
        duration: 600,
        easing: easing
      });

      let animation = newDataItem.animate({
        key: "locationX",
        to: 0.5,
        from: -0.5,
        duration: 600
      });
      if (animation) {
        let tooltip = xAxis.get("tooltip");
        if (tooltip && !tooltip.isHidden()) {
          animation.events.on("stopped", function () {
            xAxis.updateTooltip();
          })
        }
      }
    }

    chart.appear(1000, 100);

    return ()=>root.dispose()
  }, []);

  return (
    <div id="chartdiv1" style={{ width: "100%"}} className="h-[250px] sm:h-[350px]"></div>
  );
}

export default LineLiveChart1;
