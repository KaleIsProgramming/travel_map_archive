import styled from "@emotion/styled";
import { ComposableMap, Geographies, Geography } from "react-simple-maps"

const geoUrl =
  "/features.json"

export const MapChart = () => {
  return (
    <MapContainer>
        <ComposableMap>
        <Geographies geography={geoUrl}>
            {({ geographies }) =>
            geographies.map((geo) => (
                <Geography key={geo.rsmKey} geography={geo} />
            ))
            }
        </Geographies>
        </ComposableMap>
    </MapContainer>
  );
};


const MapContainer = styled.div`
    height: 100%;
    width: 100%;
`;
