import Date, {DateBetween} from '../components/date';
import postStyles from './post.module.css';
import Image from 'next/image';

export default function PostBox(props) {
  return (
    <ul className={postStyles.list}>
      {props.allPostsData.map(({ id, description, dateFrom, dateTo, company, position }) => (
        <li className={postStyles.post} key={id}>
          <div className={postStyles.postInformation}>
            {company ?
              <div className={postStyles.companyLogo}>
                <Image src={`/companies/${company}.svg`} height={40} width={40} />
              </div>
            : null}
            <div className={postStyles.right}>
                <div className={postStyles.position}>
                  {position}
                </div>
                <div className={postStyles.subHeading}>
                  <div className={postStyles.company}>
                    {company}
                  </div>
                <div className={postStyles.date}>
                  <Date dateString={dateFrom} /> - <Date dateString={dateTo} /> · <DateBetween dateFrom={dateFrom} dateTo={dateTo} />
                </div>
              </div>
            </div>
          </div>
          <small className={postStyles.description}>
            {description}
          </small>
        </li>
      ))}
    </ul>
  );
}