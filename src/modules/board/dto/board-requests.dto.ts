
export interface CreateBoardRequest {
    title: string;
    userId: string;
  }

export interface UpdateBoardTitleRequest {
  _id: string;
  newTitle: string;
}