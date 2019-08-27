import React from 'react';
import PropTypes from 'prop-types';
import styles from './tagList.module.css';
import { Tag } from '../tag/tag';

const tagListTypes = {
  project: styles.projectTags,
  postHighlight: styles.postHighlightTags,
}

const TagList = ({ tags, tagListType, tagType }) => {
  return (
    <ul className={tagListType}>
      {transformTags(tags, tagType)}
    </ul>
  );
}

const transformTags = (tags, tagType) => (
  tags.map((tagContent, index) => (
    <Tag key={index} tagType = {tagType}>
      {tagContent}
    </Tag>
  ))
)

TagList.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string)
}

export { TagList, tagListTypes };
