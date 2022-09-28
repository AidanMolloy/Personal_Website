import Date, { DateBetween } from "../components/date";
import postStyles from "./post.module.css";
import Image from "next/image";

export default function PostBox(props) {
  return (
    <ul className={postStyles.list}>
      {props.allPostsData.map(
        ({
          id,
          summary,
          dateFrom,
          dateTo,
          company,
          company_logo,
          position,
        }) => (
          <li className={postStyles.post} key={id}>
            <div className={postStyles.postInformation}>
              {company ? (
                <div className={postStyles.companyLogo}>
                  <Image
                    src={`/companies/${company_logo}`}
                    alt={`${company}'s Logo`}
                    height={40}
                    width={40}
                  />
                </div>
              ) : null}
              <div className={postStyles.right}>
                <div className={postStyles.position}>{position}</div>
                <div className={postStyles.subHeading}>
                  <div className={postStyles.company}>{company}</div>
                  <div className={postStyles.dateContainer}>
                    <div className={postStyles.dateItem}>
                      <Date dateString={dateFrom} /> -{" "}
                      <Date dateString={dateTo} />
                    </div>
                    &nbsp;
                    <div className={postStyles.dateItem}>
                      · <DateBetween dateFrom={dateFrom} dateTo={dateTo} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <small className={postStyles.description}>{summary}</small>
          </li>
        )
      )}
    </ul>
  );
}
