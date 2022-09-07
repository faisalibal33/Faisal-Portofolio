import Modal from "@mui/material/Modal";
import "./modalEducation.css";

export default function ModalEducation({ openEdu, handleClose }) {
  return (
    <div>
      <Modal
        open={openEdu}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="modalExp">
          <div className="workExp">
            <h3 style={{ fontWeight: "500" }}>Education</h3>
          </div>
          <div className="boxExp">
            <div className="headerExp">
              <p className="companyExp">Binus University</p>
              <p>Feb 2022 - Feb 2024 (Expected)</p>
            </div>
            <div>
              <p className="positionExp">
                Bachelor Degree in Computer Science, 3.90/4.00
              </p>
            </div>
            <ul className="descExp">
              <li>Scholarship recipients from exam test results</li>
            </ul>
          </div>
          <div className="boxExp">
            <div className="headerExp">
              <p className="companyExp">Suryadarma University</p>
              <p>Sep 2015 - Sep 2018</p>
            </div>
            <div className="positionExp">
              <p>Associate Degree in Aeronautics Engineering, 3.89/4.00</p>
            </div>
            <ul className="descExp">
              <li>
                Recipient of a 100% scholarship from the regional government of
                the Riau Islands.
              </li>
              <li>Cumlaude Graduate 3.89/4.00</li>
              <li>
                Final project, making water faucet automation with passive
                infrared sensor and C++ Programming
              </li>
            </ul>
          </div>
        </div>
      </Modal>
    </div>
  );
}
