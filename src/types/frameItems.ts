export interface FrameItem {
  id: number;
  name: string | ArrayBuffer | null;
  type: string;
}

export interface FrameState {
  frameItems: FrameItem[];
}
