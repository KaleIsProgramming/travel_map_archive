import { useState } from "react";
import styled from "@emotion/styled";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const geoUrl = "/countries.json";

export const MapChart = () => {
  const [clickedCity, setClickedCity] = useState<any>([]);

  const handleClick = (geo:any) => {
    setClickedCity([...clickedCity, geo.properties.name]);

    
  };
  console.log(clickedCity)
  return (
    <MapContainer>
      <ComposableMap>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {

              const isClickedHandler:any = () => {
                let isClickedCountry = false;
                clickedCity.forEach((country:string) => {
                    if(country === geo.properties.name) {
                        isClickedCountry = true;
                    }
                })
                return isClickedCountry;
                
              };
              let isClicked = false;

              if(clickedCity[0] !== undefined) {
                isClicked = isClickedHandler();
              }
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onClick={() => handleClick(geo)}
                  fill={isClicked ? "#57c9f2" : "#D6D6DA"}
                  style={{
                    default: {
                      outline: "none",
                    },
                    hover: {
                      fill: "#57c9f2",
                      stroke: "#FFFFFF",
                      outline: "none",
                    },
                    pressed: {
                        outline: 'none'
                    }
                  }}
                />
              );
            })
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
