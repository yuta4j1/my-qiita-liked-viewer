export type ArticleInfo = {
  uuid: string;
  title: string;
  url: string;
  userImageUrl: string;
  updateDate: string;
  tagList: string[];
};

export type Column = {
  categoryName: string;
  articles: ArticleInfo[];
};

export type SourceArticleInfo = {
  uuid: string;
  title: string;
  url: string;
  userImageUrl: string;
  updateDate: string;
  tagList: string[];
};

export type ModalState = {
  isOpen: boolean;
  headerTitle?: string;
  modalBody: JSX.Element;
  atClose: (any) => void;
};

export type SideModalState = {
  isShow: boolean;
};

export type ColumnState = string[];

export type ColumnPosition = number;

export type LoadingState = {
  isActive: boolean;
};

export type ColumnCardState = {
  id: string;
  text: string;
  order: number;
};

export type User = {
  id: string;
  name: string;
  profileImageUrl: string;
};

export type ReduxAction<T> = {
  type: string;
  payload: T;
};
