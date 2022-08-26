import "./write.css";

/**
 * @author
 * @function Write
 **/

export const Write = (props) => {
  return (
    <div className="write">
      <img
        src={require("../../assets/bsv-convention.jpg")}
        alt="bsvconvention"
        className="writeImage"
      />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className=" writeIcon fa-solid fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="writeInput writeText"
          ></textarea>
        </div>
        <button className="writeSubmit">publish</button>
      </form>
    </div>
  );
};
