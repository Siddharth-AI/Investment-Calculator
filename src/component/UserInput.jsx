import { useContext } from "react";
import { UserContext } from "../dataContext/DataProvider";
import { InputGroup } from "./ui/InputGroup";

export const UserInput = () => {
  const { setannualData } = useContext(UserContext);

  const handleInput = (e) => {
    const { name, value } = e.target;
    const parsedValue = value ? Number(value) : 0;
    setannualData((prevData) => ({
      ...prevData,
      [name]: parsedValue,
    }));
  };
  return (
    <section>
      <div id="user-input">
        <div className="input-group">
          <InputGroup
            type="number"
            name="initialInvestment"
            title="initial Investment"
            handleChange={handleInput}
          />
          <InputGroup
            type="number"
            name="annualInvestment"
            title="annual Investment"
            handleChange={handleInput}
          />
          <InputGroup
            type="number"
            name="expectedReturn"
            title="expected Investment"
            handleChange={handleInput}
          />
          <InputGroup
            type="number"
            name="duration"
            title="duration"
            handleChange={handleInput}
          />
        </div>
      </div>
    </section>
  );
};
