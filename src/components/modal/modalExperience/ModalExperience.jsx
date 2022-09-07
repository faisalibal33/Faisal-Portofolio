import Modal from "@mui/material/Modal";
import "./modalExperience.css";

export default function ModalExperience({ openExp, handleClose }) {
  return (
    <div>
      <Modal
        open={openExp}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="modalExp">
          <div className="workExp">
            <h3 style={{ fontWeight: "500" }}>Work Experience</h3>
          </div>
          <div className="boxExp">
            <div className="headerExp">
              <p className="companyExp">Garuda Maintenance Facility AeroAsia</p>
              <p>Aug 2022 - Present</p>
            </div>
            <div>
              <p className="positionExp">ICT Engineer</p>
            </div>
            <ul className="descExp">
              <li>
                Top 1 Innovator at Exception Innovation GMF Aeroasia 03 Aug
                2022. Build Web Apps "GMF SP Document Tracking", This
                application aims to simplify the process of sending and tracking
                documents at GMF, which is used by more than 5000 GMF employees
              </li>
              <li>
                Top 8 Innovator at Exception Ideas Innovation GMF Aeroasia 03
                Aug 2022. Build Web Apps and Mobile Apps "Excellent Equipment
                Request". This application aims to simplify the process of
                request equipment support, which used by more than 5000 GMF
                employes
              </li>
              <li>
                Maintenance and Upgrade Web Apps and Mobile Apps in GMF
                Aeroasia, which used by more than 5000 GMF Employes
              </li>
            </ul>
          </div>
          <div className="boxExp">
            <div className="headerExp">
              <p className="companyExp">Garuda Maintenance Facility AeroAsia</p>
              <p>Apr 2022 - Aug 2022</p>
            </div>
            <div className="positionExp">
              <p>Aircraft Maintenance Planner</p>
            </div>
            <ul className="descExp">
              <li>
                Maintenance and ensure all devices for work in production
                planning control can run normally and make employee performance
                in production planning control 100% efficient
              </li>
              <li>
                Check and make sure all work orders on Maintenance work package
                pass the 100% quality check and ready to distribute
              </li>
              <li>
                Ensure the maintenance activities on timeline of Planning Gate,
                by coordinating with related units and anticipate 90%
                maintenance delay
              </li>
              <li>
                Get Promoted to ICT Engineer for build an application that cut
                paper usage by 75%
              </li>
            </ul>
          </div>
          <div className="boxExp">
            <div className="headerExp">
              <p className="companyExp">Garuda Maintenance Facility AeroAsia</p>
              <p>Jan 2019 - Mar 2022</p>
            </div>
            <div className="positionExp">
              <p>Senior Aircraft Maintenance Technician</p>
            </div>
            <ul className="descExp">
              <li>
                Perform remove & install aircraft component on aircraft include
                servicing & lubrication.
              </li>
              <li>
                Inspect and analysis of aircraft structures for damage and
                corrosion
              </li>
              <li>Write discrepancy and make simple rectification order.</li>
            </ul>
          </div>
        </div>
      </Modal>
    </div>
  );
}
