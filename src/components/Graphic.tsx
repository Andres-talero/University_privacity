import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import { GraphicContainer, GraphicTitle } from "../elements/GraphicElements";

const data = [
  { name: "FaceBook", porcentaje: 79.5, fill: "#1877F2" },
  { name: "Instagram", porcentaje: 69.2, fill: "#C13584" },
  { name: "Tinder", porcentaje: 61.5, fill: "#FD267A" },
  { name: "Uber", porcentaje: 56.4, fill: "#000" },
  { name: "TikTok", porcentaje: 46.2, fill: "#FE2C55" },
  { name: "Spotify", porcentaje: 35.9, fill: "#81b71a" },
];

const Graphic = () => {
  return (
    <GraphicContainer>
      <GraphicTitle style={{ textAlign: "center", margin: "2rem" }}>
        Porcentaje de Información Recopilada
      </GraphicTitle>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" fontSize={16} />
          <YAxis fontSize={16} />
          <Tooltip/>
          <Bar
            dataKey="porcentaje"
            fill="rgba(1, 59, 193, 0.56)"
            color="#fff"
          >
            <LabelList dataKey="porcentaje" position="top" fontSize={16} color="#fff" fontWeight={600}/>
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </GraphicContainer>
  );
};

export default Graphic;
