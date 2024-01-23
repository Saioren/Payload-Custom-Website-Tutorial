import React from "react";
import { Type as MediaType, Size } from "../../collections/Media";
import useStyles from "./css";

type Props = MediaType & {
  className?: string;
  preferredSize?: Size;
};

const Media: React.FC<Props> = ({
  className,
  mimeType,
  filename,
  alt,
  preferredSize,
  sizes,
}) => {
  const classes = useStyles();

  if (mimeType.includes("video")) {
    return (
      <div className={className}>
        <video autoPlay muted loop controls={false} className={classes.video}>
          <source
            src={`${process.env.NEXT_PIBLIC_SERVER_URL}/media/${
              sizes?.[preferredSize]?.filename || filename
            }`}
            alt={alt}
          />
        </video>
      </div>
    );
  }
};

export default Media;
