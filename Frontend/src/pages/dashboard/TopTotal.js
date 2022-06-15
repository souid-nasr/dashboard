import React from "react";

const TopTotal = (props) => {
  const { universities } = props;

  return (
    <div className="row">
      <div className="col-lg-4">
        <div className="card card-body mb-4 shadow-sm">
          <article className="icontext">
            {/* <span className="icon icon-sm rounded-circle alert-primary">
              <i className="text-primary fas fa-usd-circle"></i>
            </span> */}
            <div className="text">
            <span>
                 <iframe src="https://charts.mongodb.com/charts-project-0-unxuu/embed/charts?id=6274fbb4-94a3-4ed4-8b0f-07150903f0db&maxDataAge=10&theme=light&autoRefresh=true">
                 </iframe></span>
            </div>
          </article>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="card card-body mb-4 shadow-sm">
          <article className="icontext">
            {/* <span className="icon icon-sm rounded-circle alert-success">
            <i className="fa-solid fa-graduation-cap"></i>
            </span> */}
            <div className="text">
            <span>
                 <iframe src="https://charts.mongodb.com/charts-project-0-unxuu/embed/charts?id=6260e964-1fe8-49ef-85a2-814b1626b247&maxDataAge=3600&theme=light&autoRefresh=true">
                 </iframe></span>
            </div>
          </article>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="card card-body mb-4 shadow-sm">
          <article className="icontext">
            {/* <span className="icon icon-sm rounded-circle alert-warning">
              <i className="text-warning fas fa-shopping-basket"></i>
            </span> */}
            <div className="text">
               <span>
                 <iframe src="https://charts.mongodb.com/charts-project-0-unxuu/embed/charts?id=6260e80a-1fe8-4686-88b0-814b16262c57&maxDataAge=10&theme=light&autoRefresh=true">
                 </iframe>
               </span>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default TopTotal;
