export interface Root {
  contents: Content[]
}

export interface Content {
  type: string
  title: Title
  contents: Content2[]
  continuation: string
}

export interface Title {
  runs: Run[]
  text: string
}

export interface Run {
  text: string
  bold: boolean
  italics: boolean
  strikethrough: boolean
}

export interface Content2 {
  type: string
  flex_columns: FlexColumn[]
  fixed_columns: any[]
  item_type: string
  id: string
  title: string
  duration: Duration
  album: Album
  artists: Artist[]
  thumbnail: Thumbnail
  menu: Menu
  overlay: Overlay
}

export interface FlexColumn {
  type: string
  title: Title2
  display_priority: string
}

export interface Title2 {
  runs: Run2[]
  text: string
  endpoint?: Endpoint2
}

export interface Run2 {
  text: string
  bold: boolean
  italics: boolean
  strikethrough: boolean
  endpoint?: Endpoint
}

export interface Endpoint {
  type: string
  payload: Payload
  metadata: Metadata
}

export interface Payload {
  videoId?: string
  watchEndpointMusicSupportedConfigs?: WatchEndpointMusicSupportedConfigs
  browseId?: string
  browseEndpointContextSupportedConfigs?: BrowseEndpointContextSupportedConfigs
}

export interface WatchEndpointMusicSupportedConfigs {
  watchEndpointMusicConfig: WatchEndpointMusicConfig
}

export interface WatchEndpointMusicConfig {
  musicVideoType: string
}

export interface BrowseEndpointContextSupportedConfigs {
  browseEndpointContextMusicConfig: BrowseEndpointContextMusicConfig
}

export interface BrowseEndpointContextMusicConfig {
  pageType: string
}

export interface Metadata {
  api_url: string
}

export interface Endpoint2 {
  type: string
  payload: Payload2
  metadata: Metadata2
}

export interface Payload2 {
  videoId?: string
  watchEndpointMusicSupportedConfigs?: WatchEndpointMusicSupportedConfigs2
  browseId?: string
  browseEndpointContextSupportedConfigs?: BrowseEndpointContextSupportedConfigs2
}

export interface WatchEndpointMusicSupportedConfigs2 {
  watchEndpointMusicConfig: WatchEndpointMusicConfig2
}

export interface WatchEndpointMusicConfig2 {
  musicVideoType: string
}

export interface BrowseEndpointContextSupportedConfigs2 {
  browseEndpointContextMusicConfig: BrowseEndpointContextMusicConfig2
}

export interface BrowseEndpointContextMusicConfig2 {
  pageType: string
}

export interface Metadata2 {
  api_url: string
}

export interface Duration {
  text: string
  seconds: number
}

export interface Album {
  id: string
  name: string
  endpoint: Endpoint3
}

export interface Endpoint3 {
  type: string
  payload: Payload3
  metadata: Metadata3
}

export interface Payload3 {
  browseId: string
  browseEndpointContextSupportedConfigs: BrowseEndpointContextSupportedConfigs3
}

export interface BrowseEndpointContextSupportedConfigs3 {
  browseEndpointContextMusicConfig: BrowseEndpointContextMusicConfig3
}

export interface BrowseEndpointContextMusicConfig3 {
  pageType: string
}

export interface Metadata3 {
  api_url: string
}

export interface Artist {
  name: string
  channel_id: string
  endpoint: Endpoint4
}

export interface Endpoint4 {
  type: string
  payload: Payload4
  metadata: Metadata4
}

export interface Payload4 {
  browseId: string
  browseEndpointContextSupportedConfigs: BrowseEndpointContextSupportedConfigs4
}

export interface BrowseEndpointContextSupportedConfigs4 {
  browseEndpointContextMusicConfig: BrowseEndpointContextMusicConfig4
}

export interface BrowseEndpointContextMusicConfig4 {
  pageType: string
}

export interface Metadata4 {
  api_url: string
}

export interface Thumbnail {
  type: string
  contents: Content3[]
}

export interface Content3 {
  url: string
  width: number
  height: number
}

export interface Menu {
  type: string
  items: Item[]
  top_level_buttons: any[]
  label: string
}

export interface Item {
  type: string
  text: any
  icon_type: string
  endpoint?: Endpoint5
  toggled_text?: ToggledText
  toggled_icon_type?: string
  default_endpoint?: DefaultEndpoint
  toggled_endpoint?: ToggledEndpoint
}

export interface Endpoint5 {
  type: string
  payload: Payload5
  metadata: Metadata5
  modal?: Modal2
}

export interface Payload5 {
  serializedShareEntity?: string
  sharePanelType?: string
  browseId?: string
  browseEndpointContextSupportedConfigs?: BrowseEndpointContextSupportedConfigs5
  modal?: Modal
  videoId?: string
  playlistId?: string
  params?: string
  loggingContext?: LoggingContext
  watchEndpointMusicSupportedConfigs?: WatchEndpointMusicSupportedConfigs3
  queueTarget?: QueueTarget
  queueInsertPosition?: string
  commands?: Command[]
}

export interface BrowseEndpointContextSupportedConfigs5 {
  browseEndpointContextMusicConfig: BrowseEndpointContextMusicConfig5
}

export interface BrowseEndpointContextMusicConfig5 {
  pageType: string
}

export interface Modal {
  modalWithTitleAndButtonRenderer: ModalWithTitleAndButtonRenderer
}

export interface ModalWithTitleAndButtonRenderer {
  title: Title3
  content: Content4
  button: Button
}

export interface Title3 {
  runs: Run3[]
}

export interface Run3 {
  text: string
}

export interface Content4 {
  runs: Run4[]
}

export interface Run4 {
  text: string
}

export interface Button {
  buttonRenderer: ButtonRenderer
}

export interface ButtonRenderer {
  style: string
  isDisabled: boolean
  text: Text
  navigationEndpoint: NavigationEndpoint
  trackingParams: string
}

export interface Text {
  runs: Run5[]
}

export interface Run5 {
  text: string
}

export interface NavigationEndpoint {
  clickTrackingParams: string
  signInEndpoint: SignInEndpoint
}

export interface SignInEndpoint {
  hack: boolean
}

export interface LoggingContext {
  vssLoggingContext: VssLoggingContext
}

export interface VssLoggingContext {
  serializedContextData: string
}

export interface WatchEndpointMusicSupportedConfigs3 {
  watchEndpointMusicConfig: WatchEndpointMusicConfig3
}

export interface WatchEndpointMusicConfig3 {
  musicVideoType: string
}

export interface QueueTarget {
  videoId: string
  onEmptyQueue: OnEmptyQueue
}

export interface OnEmptyQueue {
  clickTrackingParams: string
  watchEndpoint: WatchEndpoint
}

export interface WatchEndpoint {
  videoId: string
}

export interface Command {
  clickTrackingParams: string
  addToToastAction: AddToToastAction
}

export interface AddToToastAction {
  item: Item2
}

export interface Item2 {
  notificationTextRenderer: NotificationTextRenderer
}

export interface NotificationTextRenderer {
  successResponseText: SuccessResponseText
  trackingParams: string
}

export interface SuccessResponseText {
  runs: Run6[]
}

export interface Run6 {
  text: string
}

export interface Metadata5 {
  api_url?: string
}

export interface Modal2 {
  type: string
  title: Title4
  content: Content5
  button: Button2
}

export interface Title4 {
  runs: Run7[]
  text: string
}

export interface Run7 {
  text: string
  bold: boolean
  italics: boolean
  strikethrough: boolean
}

export interface Content5 {
  runs: Run8[]
  text: string
}

export interface Run8 {
  text: string
  bold: boolean
  italics: boolean
  strikethrough: boolean
}

export interface Button2 {
  type: string
  text: string
  is_disabled: boolean
  endpoint: Endpoint6
}

export interface Endpoint6 {
  type: string
  payload: Payload6
  metadata: Metadata6
}

export interface Payload6 {
  hack: boolean
}

export interface Metadata6 {}

export interface ToggledText {
  runs: Run9[]
  text: string
}

export interface Run9 {
  text: string
  bold: boolean
  italics: boolean
  strikethrough: boolean
}

export interface DefaultEndpoint {
  type: string
  payload: Payload7
  modal: Modal4
  metadata: Metadata8
}

export interface Payload7 {
  modal: Modal3
}

export interface Modal3 {
  modalWithTitleAndButtonRenderer: ModalWithTitleAndButtonRenderer2
}

export interface ModalWithTitleAndButtonRenderer2 {
  title: Title5
  content: Content6
  button: Button3
}

export interface Title5 {
  runs: Run10[]
}

export interface Run10 {
  text: string
}

export interface Content6 {
  runs: Run11[]
}

export interface Run11 {
  text: string
}

export interface Button3 {
  buttonRenderer: ButtonRenderer2
}

export interface ButtonRenderer2 {
  style: string
  isDisabled: boolean
  text: Text2
  navigationEndpoint: NavigationEndpoint2
  trackingParams: string
}

export interface Text2 {
  runs: Run12[]
}

export interface Run12 {
  text: string
}

export interface NavigationEndpoint2 {
  clickTrackingParams: string
  signInEndpoint: SignInEndpoint2
}

export interface SignInEndpoint2 {
  hack: boolean
}

export interface Modal4 {
  type: string
  title: Title6
  content: Content7
  button: Button4
}

export interface Title6 {
  runs: Run13[]
  text: string
}

export interface Run13 {
  text: string
  bold: boolean
  italics: boolean
  strikethrough: boolean
}

export interface Content7 {
  runs: Run14[]
  text: string
}

export interface Run14 {
  text: string
  bold: boolean
  italics: boolean
  strikethrough: boolean
}

export interface Button4 {
  type: string
  text: string
  is_disabled: boolean
  endpoint: Endpoint7
}

export interface Endpoint7 {
  type: string
  payload: Payload8
  metadata: Metadata7
}

export interface Payload8 {
  hack: boolean
}

export interface Metadata7 {}

export interface Metadata8 {}

export interface ToggledEndpoint {
  type: string
  payload: Payload9
  metadata: Metadata9
}

export interface Payload9 {}

export interface Metadata9 {}

export interface Overlay {
  type: string
  content: Content8
  content_position: string
  display_style: string
}

export interface Content8 {
  type: string
  endpoint: Endpoint8
  play_icon_type: string
  pause_icon_type: string
  play_label: string
  pause_label: string
  icon_color: number
}

export interface Endpoint8 {
  type: string
  payload: Payload10
  metadata: Metadata10
}

export interface Payload10 {
  videoId: string
  watchEndpointMusicSupportedConfigs: WatchEndpointMusicSupportedConfigs4
}

export interface WatchEndpointMusicSupportedConfigs4 {
  watchEndpointMusicConfig: WatchEndpointMusicConfig4
}

export interface WatchEndpointMusicConfig4 {
  musicVideoType: string
}

export interface Metadata10 {
  api_url: string
}
