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

export type LoadingState = {
  isActive: boolean;
};

export type ReduxAction<T> = {
  type: string;
  payload: T;
};
