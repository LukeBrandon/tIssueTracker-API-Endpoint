
export interface CreateIssueRequest {
    title: string;
    desc: string;
    status: string;
    userId: string;
    boardId: string;
  }

  export interface UpdateIssueStatusRequest {
    _id: string;
    newStatus: string;
  }