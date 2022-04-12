import ReactModal from 'react-modal';
import styled from 'styled-components';
import palette from '../utils/palette';

const NewsModalWrapper = styled(ReactModal)`
  position: absolute;
  top: 100px;
  left: 200px;
  right: 200px;
  bottom: 100px;
  overflow: auto;
  background-color: white;
  padding-bottom: 40px;
  border-radius: 8px;
  overflow-x: hidden;
  background-color: ${palette.colors.bodyBackground};
  outline: none;

  * {
    color: ${palette.colors.text};
  }

  img {
    max-width: 100%;
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 15px;
    font-size: 14px;
  }

  figure {
    text-align: center;
  }

  figcaption {
    font-size: 10px;
    margin-bottom: 10px;
    color: #999;
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: 20px;
  }

  ul {
    list-style-type: square;
    padding: 0 30px 0 60px;
  }

  &::-webkit-scrollbar {
    border-radius: 0 8px 8px 0;
    background-color: #ccc;
    border: 1px solid #aaa;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 8px;
    border: 3px solid transparent;
    background-clip: content-box;
    background-color: #343434;
  }

  &::-webkit-scrollbar-track {
    overflow: hidden;
  }
`;

const NewsModal: React.FC<ReactModal.Props> = ({ children, ...props }) => {
  return <NewsModalWrapper {...props}>{children}</NewsModalWrapper>;
};

export default NewsModal;
