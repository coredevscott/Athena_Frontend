import { useEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

let data = [
    {
        percent: "30%",
        Utilization: 1,
        Borrow: 5
    },
    {
        percent: "34%",
        Utilization: 1,
        Borrow: 2
    },
    {   
        percent: "38%",
        Utilization: 2,
        Borrow: 3
    },
    {
        percent: "50%",
        Utilization: 3,
        Borrow: 4
    },
    {
        percent: "54%",
        Utilization: 5,
        Borrow: 1
    },
    {
        percent: "58%",
        Utilization: 3,
        Borrow: 2
    },
    {
        percent: "62%",
        Utilization: 1,
        Borrow: 2
    },
    {
        percent: "66%",
        Utilization: 2,
        Borrow: 1
    },
    {
        percent: "70%",
        Utilization: 3,
        Borrow: 5
    },
    {
        percent: "74%",
        Utilization: 4,
        Borrow: 3
    },
    {
        percent: "78%",
        Utilization: 1,
        Borrow: 2
    }
];

const CompareChart = () => {
  useEffect(() => {
    let root = am5.Root.new("comparechart");

    root.setThemes([
    am5themes_Animated.new(root)
    ]);

    let chart = root.container.children.push(
    am5xy.XYChart.new(root, {
        panX: true, 
        panY: true,
        wheelX: "panX",
        wheelY: "zoomX",
        layout: root.verticalLayout,
        pinchZoomX: true
    })
    );

    let cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
    behavior: "none"
    }));
    cursor.lineY.set("visible", false);

    let xRenderer = am5xy.AxisRendererX.new(root, {
    minorGridEnabled: true
    });
    xRenderer.grid.template.set("location", 0.5);
    xRenderer.labels.template.setAll({
    location: 0.5,
    multiLocation: 0.5
    });

    let xAxis = chart.xAxes.push(
    am5xy.CategoryAxis.new(root, {
        categoryField: "percent",
        renderer: xRenderer,
        tooltip: am5.Tooltip.new(root, {})
    })
    );

    xAxis.data.setAll(data);

    let yAxis = chart.yAxes.push(
    am5xy.ValueAxis.new(root, {
        maxPrecision: 0,
        renderer: am5xy.AxisRendererY.new(root, {
        inversed: true
        })
    })
    );

    function createSeries(name, field) {
    let series = chart.series.push(
        am5xy.LineSeries.new(root, {
        name: name,
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: field,
        stroke: name == "Utilization" ? am5.color("#FFCD1C") : am5.color("#30B778"),
        categoryXField: "percent",
        tooltip: am5.Tooltip.new(root, {
            pointerOrientation: "horizontal",
            labelText: "[bold]{name}[/]\n{categoryX}: {valueY}"
        })
        })
    );

    series.bullets.push(function () {
        return am5.Bullet.new(root, {
        sprite: am5.Circle.new(root, {
            radius: 5,
            fill: name == "Utilization" ? am5.color("#FFCD1C") : am5.color("#30B778"),
        })
        });
    });

    series.set("setStateOnChildren", true);
    series.states.create("hover", {});

    series.mainContainer.set("setStateOnChildren", true);
    series.mainContainer.states.create("hover", {});

    series.strokes.template.states.create("hover", {
        strokeWidth: 4
    });

    series.data.setAll(data);
    series.appear(1000);
    }

    createSeries("Utilization", "Utilization");
    createSeries("Borrow APR", "Borrow");

    let legend = chart.children.push(
    am5.Legend.new(root, {
        centerX: am5.p50,
        x: am5.p50
    })
    );

    legend.itemContainers.template.states.create("hover", {});

    legend.itemContainers.template.events.on("pointerover", function (e) {
    e.target.dataItem.dataContext.hover();
    });
    legend.itemContainers.template.events.on("pointerout", function (e) {
    e.target.dataItem.dataContext.unhover();
    });

    legend.data.setAll(chart.series.values);

    chart.appear(1000, 100);

    return ()=>root.dispose()
  }, []);

  return (
    <div id="comparechart" style={{ width: "100%"}} className="sm:h-[450px] h-[350px]"></div>
  );
}

export default CompareChart;
