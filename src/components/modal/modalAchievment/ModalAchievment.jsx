import Modal from "@mui/material/Modal";

export default function ModalAchievment({ openAch, handleClose }) {
  return (
    <div>
      <Modal
        open={openAch}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="modalExp">
          <div className="workExp">
            <h3 style={{ fontWeight: "500" }}>Achievment</h3>
          </div>
          <div className="boxExp">
            <div className="headerExp">
              <p className="companyExp">Top #1 Pitching Battle</p>
              <p>03 Aug 2022</p>
            </div>
            <div>
              <p className="positionExp">
                GMF AeroAsia Exception Ideas Innovation
              </p>
            </div>
            <ul className="descExp">
              <li>
                Build Web Apps "GMF SP Document Tracking", This application aims
                to simplify the process of sending and tracking documents at
                GMF,
              </li>
              <li>
                GMF SP Online is a WEB Apps-based application that functions as
                a database of proof of delivery of documents/packages between
                units at GMF. This application is built with React.js as
                frontend, Express.js Node.js as backend server, and MongoDB as
                database
              </li>
            </ul>
          </div>
          <div className="boxExp">
            <div className="headerExp">
              <p className="companyExp">Top #8 Pitching Battle</p>
              <p>03 Aug 2022</p>
            </div>
            <div className="positionExp">
              <p>GMF AeroAsia Exception Ideas Innovation</p>
            </div>
            <ul className="descExp">
              <li>
                Build Web Apps and Mobile Apps "Excellent Equipment Request".
                This application aims to simplify the process of request
                equipment support,
              </li>
              <li>
                This application is based on WebApps and Mobile Apps.This
                application is built with React.js and React Native as frontend,
                Express.js Node.js as backend server, and MongoDB as database
              </li>
            </ul>
          </div>
        </div>
      </Modal>
    </div>
  );
}
