import React, {ReactNode} from 'react';
import Title from '../common/Title';
import PhotoButton from '../common/PhotoButton';
import styled from '@emotion/native';

interface ResourceUploadHeaderProps {
  children?: ReactNode;
  titleColor?: string;
  fontSize?: string;
  paddingTop?: string;
  paddingBottom?: string;
}

const ResourceUploadHeader = (props: ResourceUploadHeaderProps) => {
  return (
    <ResourceUploadHeaderLayour>
      <Title
        textColor={props.titleColor}
        fontSize={props.fontSize}
        paddingTop={props.paddingTop}
        paddingBottom={props.paddingBottom}>
        {props.children}
      </Title>
      <ButtonContainer>
        <PhotoButton resource="camera" />
        <PhotoButton resource="gallery" />
      </ButtonContainer>
    </ResourceUploadHeaderLayour>
  );
};

const ResourceUploadHeaderLayour = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const ButtonContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 80%;
  height: 46px;
  margin-top: 10px;
`;

export default ResourceUploadHeader;
