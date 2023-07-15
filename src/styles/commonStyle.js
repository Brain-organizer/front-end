import { styled } from "styled-components";

export const LayoutMargin = styled.div`
  max-width: 1320px;
  margin: 0 auto;
`;

export const StyledStarBox = styled.div`
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px 5px;
  border: 1px solid #dddddd;
  border-radius: 10px;
`;

export const RightIcon = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  right: 16px;
  z-index: 99;
  text-align: right;
`;

export const LeftIcon = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  left: 16px;
  z-index: 99;
  text-align: left;
`;

export const StyledReviewBox = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #dddddd;
  border-radius: 10px;
  padding: 10px 20px;
`;

export const ReviewBoxRow = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
`;

export const UserProfile = styled.div`
  display: flex;
  gap: 10px;
`;

export const UserReview = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const StyledLikeReply = styled.div`
  display: flex;
  gap: 20px;

  & div {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  & svg {
    color: black;
    cursor: pointer;
    opacity: 0.5;
  }

  & svg:hover {
    opacity: 1;
  }
`;
