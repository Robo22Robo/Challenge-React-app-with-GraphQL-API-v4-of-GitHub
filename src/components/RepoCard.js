import React from "react";

import "styled-components/macro";

import Card from "./Card";
import Tag from "./Tag";

const RepoCard = ({ data }) => {
  const hasStarred = data.viewerHasStarred;

  return (
    <Card>
      <div
        css={{
          display: "grid",
          gridTemplateColumns: "auto 1fr",
          gridGap: 10,
          alignItems: "center",
          fontSize: 14
        }}
      >
        <a
          css={{ color: "#555" }}
          href={data.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {data.nameWithOwner}
        </a>
      </div>
      {data.repositoryTopics.edges.length ? (
        <div>
          {data.repositoryTopics.edges.map(({ node }) => (
            <Tag key={node.topic.id}>{node.topic.name}</Tag>
          ))}
        </div>
      ) : null}
    </Card>
  );
};

export default RepoCard;
