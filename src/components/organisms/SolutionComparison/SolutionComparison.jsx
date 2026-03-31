import React from "react";
import PropTypes from "prop-types";
import classes from "./SolutionComparison.module.css";
import HeadingSection from "@/components/molecules/HeadingSection/HeadingSection";

export default function SolutionComparison({ data }) {
  return (
    <div className={classes.main}>
      <HeadingSection title={data?.title} description={data?.description} />
      <div className={classes.tableWrapper}>
        <table className={classes.table}>
          <thead>
            <tr>
              {data?.columns?.map((column) => (
                <th
                  key={column}
                  className={
                    column === data?.columns?.[0]
                      ? classes.featureHeader
                      : column === data?.columns?.[1]
                      ? classes.oneOfficeHeader
                      : classes.modernWorkplaceHeader
                  }
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data?.rows?.map((row, rowIndex) => (
              <tr key={row.feature} className={rowIndex % 2 === 0 ? classes.evenRow : classes.oddRow}>
                <td className={classes.featureCell}>{row.feature}</td>
                <td className={classes.oneOfficeCell}>{row.oneOffice}</td>
                <td className={classes.modernWorkplaceCell}>{row.modernWorkplace}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

SolutionComparison.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    columns: PropTypes.arrayOf(PropTypes.string),
    rows: PropTypes.arrayOf(
      PropTypes.shape({
        feature: PropTypes.string,
        oneOffice: PropTypes.string,
        modernWorkplace: PropTypes.string,
      })
    ),
  }),
};
