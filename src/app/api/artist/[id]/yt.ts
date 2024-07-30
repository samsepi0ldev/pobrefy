export interface Root {
  header: Header
  sections: Section[]
}

export interface Header {
  type: string
  title: Title
  description: Description
  thumbnail: Thumbnail
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

export interface Description {
  runs: Run2[]
  text: string
}

export interface Run2 {
  text: string
  bold: boolean
  italics: boolean
  strikethrough: boolean
}

export interface Thumbnail {
  type: string
  contents: Content[]
}

export interface Content {
  url: string
  width: number
  height: number
}

export interface Section {
  type: string
  title?: Title2
  contents: Content2[]
  endpoint?: Endpoint15
  bottom_text?: BottomText
  header?: Header2
}

export interface Title2 {
  runs: Run3[]
  text: string
  endpoint: Endpoint2
}

export interface Run3 {
  text: string
  bold: boolean
  italics: boolean
  strikethrough: boolean
  endpoint: Endpoint
}

export interface Endpoint {
  type: string
  payload: Payload
  metadata: Metadata
}

export interface Payload {
  browseId: string
  params: string
  browseEndpointContextSupportedConfigs: BrowseEndpointContextSupportedConfigs
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
  browseId: string
  params: string
  browseEndpointContextSupportedConfigs: BrowseEndpointContextSupportedConfigs2
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

export interface Content2 {
  type: string
  flex_columns?: FlexColumn[]
  fixed_columns?: any[]
  item_type: string
  id: string
  title: any
  artists?: Artist[]
  thumbnail: any
  menu: Menu
  overlay?: Overlay
  endpoint?: Endpoint10
  subtitle?: Subtitle
  badges: any
  year?: string
  thumbnail_overlay?: ThumbnailOverlay
  views?: string
  author?: Author
  item_count: any
  subscribers?: string
}

export interface FlexColumn {
  type: string
  title: Title3
  display_priority: string
}

export interface Title3 {
  runs: Run4[]
  text: string
  endpoint?: Endpoint4
}

export interface Run4 {
  text: string
  bold: boolean
  italics: boolean
  strikethrough: boolean
  endpoint?: Endpoint3
}

export interface Endpoint3 {
  type: string
  payload: Payload3
  metadata: Metadata3
}

export interface Payload3 {
  browseId?: string
  browseEndpointContextSupportedConfigs?: BrowseEndpointContextSupportedConfigs3
  videoId?: string
  playlistId?: string
  loggingContext?: LoggingContext
  watchEndpointMusicSupportedConfigs?: WatchEndpointMusicSupportedConfigs
}

export interface BrowseEndpointContextSupportedConfigs3 {
  browseEndpointContextMusicConfig: BrowseEndpointContextMusicConfig3
}

export interface BrowseEndpointContextMusicConfig3 {
  pageType: string
}

export interface LoggingContext {
  vssLoggingContext: VssLoggingContext
}

export interface VssLoggingContext {
  serializedContextData: string
}

export interface WatchEndpointMusicSupportedConfigs {
  watchEndpointMusicConfig: WatchEndpointMusicConfig
}

export interface WatchEndpointMusicConfig {
  musicVideoType: string
}

export interface Metadata3 {
  api_url: string
}

export interface Endpoint4 {
  type: string
  payload: Payload4
  metadata: Metadata4
}

export interface Payload4 {
  browseId?: string
  browseEndpointContextSupportedConfigs?: BrowseEndpointContextSupportedConfigs4
  videoId?: string
  playlistId?: string
  loggingContext?: LoggingContext2
  watchEndpointMusicSupportedConfigs?: WatchEndpointMusicSupportedConfigs2
}

export interface BrowseEndpointContextSupportedConfigs4 {
  browseEndpointContextMusicConfig: BrowseEndpointContextMusicConfig4
}

export interface BrowseEndpointContextMusicConfig4 {
  pageType: string
}

export interface LoggingContext2 {
  vssLoggingContext: VssLoggingContext2
}

export interface VssLoggingContext2 {
  serializedContextData: string
}

export interface WatchEndpointMusicSupportedConfigs2 {
  watchEndpointMusicConfig: WatchEndpointMusicConfig2
}

export interface WatchEndpointMusicConfig2 {
  musicVideoType: string
}

export interface Metadata4 {
  api_url: string
}

export interface Artist {
  name: string
  channel_id: string
  endpoint: Endpoint5
}

export interface Endpoint5 {
  type: string
  payload: Payload5
  metadata: Metadata5
}

export interface Payload5 {
  browseId: string
  browseEndpointContextSupportedConfigs: BrowseEndpointContextSupportedConfigs5
}

export interface BrowseEndpointContextSupportedConfigs5 {
  browseEndpointContextMusicConfig: BrowseEndpointContextMusicConfig5
}

export interface BrowseEndpointContextMusicConfig5 {
  pageType: string
}

export interface Metadata5 {
  api_url: string
}

export interface Menu {
  type: string
  items: Item[]
  top_level_buttons: TopLevelButton[]
  label: string
}

export interface Item {
  type: string
  text: any
  icon_type: string
  endpoint?: Endpoint6
  toggled_text?: ToggledText
  toggled_icon_type?: string
  default_endpoint?: DefaultEndpoint
  toggled_endpoint?: ToggledEndpoint
}

export interface Endpoint6 {
  type: string
  payload: Payload6
  metadata: Metadata6
  modal?: Modal2
}

export interface Payload6 {
  serializedShareEntity?: string
  sharePanelType?: string
  playlistId?: string
  params?: string
  modal?: Modal
  queueTarget?: QueueTarget
  queueInsertPosition?: string
  commands?: Command[]
  videoId?: string
  loggingContext?: LoggingContext3
  watchEndpointMusicSupportedConfigs?: WatchEndpointMusicSupportedConfigs3
  browseId?: string
  browseEndpointContextSupportedConfigs?: BrowseEndpointContextSupportedConfigs6
}

export interface Modal {
  modalWithTitleAndButtonRenderer: ModalWithTitleAndButtonRenderer
}

export interface ModalWithTitleAndButtonRenderer {
  title: Title4
  content: Content3
  button: Button
}

export interface Title4 {
  runs: Run5[]
}

export interface Run5 {
  text: string
}

export interface Content3 {
  runs: Run6[]
}

export interface Run6 {
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
  runs: Run7[]
}

export interface Run7 {
  text: string
}

export interface NavigationEndpoint {
  clickTrackingParams: string
  signInEndpoint: SignInEndpoint
}

export interface SignInEndpoint {
  hack: boolean
}

export interface QueueTarget {
  playlistId?: string
  onEmptyQueue: OnEmptyQueue
  videoId?: string
}

export interface OnEmptyQueue {
  clickTrackingParams: string
  watchEndpoint: WatchEndpoint
}

export interface WatchEndpoint {
  playlistId?: string
  videoId?: string
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
  runs: Run8[]
}

export interface Run8 {
  text: string
}

export interface LoggingContext3 {
  vssLoggingContext: VssLoggingContext3
}

export interface VssLoggingContext3 {
  serializedContextData: string
}

export interface WatchEndpointMusicSupportedConfigs3 {
  watchEndpointMusicConfig: WatchEndpointMusicConfig3
}

export interface WatchEndpointMusicConfig3 {
  musicVideoType: string
}

export interface BrowseEndpointContextSupportedConfigs6 {
  browseEndpointContextMusicConfig: BrowseEndpointContextMusicConfig6
}

export interface BrowseEndpointContextMusicConfig6 {
  pageType: string
}

export interface Metadata6 {
  api_url?: string
}

export interface Modal2 {
  type: string
  title: Title5
  content: Content4
  button: Button2
}

export interface Title5 {
  runs: Run9[]
  text: string
}

export interface Run9 {
  text: string
  bold: boolean
  italics: boolean
  strikethrough: boolean
}

export interface Content4 {
  runs: Run10[]
  text: string
}

export interface Run10 {
  text: string
  bold: boolean
  italics: boolean
  strikethrough: boolean
}

export interface Button2 {
  type: string
  text: string
  is_disabled: boolean
  endpoint: Endpoint7
}

export interface Endpoint7 {
  type: string
  payload: Payload7
  metadata: Metadata7
}

export interface Payload7 {
  hack: boolean
}

export interface Metadata7 {}

export interface ToggledText {
  runs: Run11[]
  text: string
}

export interface Run11 {
  text: string
  bold: boolean
  italics: boolean
  strikethrough: boolean
}

export interface DefaultEndpoint {
  type: string
  payload: Payload8
  modal: Modal4
  metadata: Metadata9
}

export interface Payload8 {
  modal: Modal3
}

export interface Modal3 {
  modalWithTitleAndButtonRenderer: ModalWithTitleAndButtonRenderer2
}

export interface ModalWithTitleAndButtonRenderer2 {
  title: Title6
  content: Content5
  button: Button3
}

export interface Title6 {
  runs: Run12[]
}

export interface Run12 {
  text: string
}

export interface Content5 {
  runs: Run13[]
}

export interface Run13 {
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
  runs: Run14[]
}

export interface Run14 {
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
  title: Title7
  content: Content6
  button: Button4
}

export interface Title7 {
  runs: Run15[]
  text: string
}

export interface Run15 {
  text: string
  bold: boolean
  italics: boolean
  strikethrough: boolean
}

export interface Content6 {
  runs: Run16[]
  text: string
}

export interface Run16 {
  text: string
  bold: boolean
  italics: boolean
  strikethrough: boolean
}

export interface Button4 {
  type: string
  text: string
  is_disabled: boolean
  endpoint: Endpoint8
}

export interface Endpoint8 {
  type: string
  payload: Payload9
  metadata: Metadata8
}

export interface Payload9 {
  hack: boolean
}

export interface Metadata8 {}

export interface Metadata9 {}

export interface ToggledEndpoint {
  type: string
  payload: Payload10
  metadata: Metadata10
}

export interface Payload10 {
  status?: string
  target?: Target
}

export interface Target {
  playlistId: string
}

export interface Metadata10 {}

export interface TopLevelButton {
  type: string
  target: Target2
  like_status: string
  likes_allowed: boolean
}

export interface Target2 {
  video_id: string
}

export interface Overlay {
  type: string
  content: Content7
  content_position: string
  display_style: string
}

export interface Content7 {
  type: string
  endpoint: Endpoint9
  play_icon_type: string
  pause_icon_type: string
  play_label: string
  pause_label: string
  icon_color: number
}

export interface Endpoint9 {
  type: string
  payload: Payload11
  metadata: Metadata11
}

export interface Payload11 {
  videoId: string
  playlistId: string
  index: number
  loggingContext: LoggingContext4
  watchEndpointMusicSupportedConfigs: WatchEndpointMusicSupportedConfigs4
}

export interface LoggingContext4 {
  vssLoggingContext: VssLoggingContext4
}

export interface VssLoggingContext4 {
  serializedContextData: string
}

export interface WatchEndpointMusicSupportedConfigs4 {
  watchEndpointMusicConfig: WatchEndpointMusicConfig4
}

export interface WatchEndpointMusicConfig4 {
  musicVideoType: string
}

export interface Metadata11 {
  api_url: string
}

export interface Endpoint10 {
  type: string
  payload: Payload12
  metadata: Metadata12
}

export interface Payload12 {
  browseId?: string
  browseEndpointContextSupportedConfigs?: BrowseEndpointContextSupportedConfigs7
  videoId?: string
  playlistId?: string
  index?: number
  loggingContext?: LoggingContext5
  watchEndpointMusicSupportedConfigs?: WatchEndpointMusicSupportedConfigs5
  params?: string
}

export interface BrowseEndpointContextSupportedConfigs7 {
  browseEndpointContextMusicConfig: BrowseEndpointContextMusicConfig7
}

export interface BrowseEndpointContextMusicConfig7 {
  pageType: string
}

export interface LoggingContext5 {
  vssLoggingContext: VssLoggingContext5
}

export interface VssLoggingContext5 {
  serializedContextData: string
}

export interface WatchEndpointMusicSupportedConfigs5 {
  watchEndpointMusicConfig: WatchEndpointMusicConfig5
}

export interface WatchEndpointMusicConfig5 {
  musicVideoType: string
}

export interface Metadata12 {
  api_url: string
}

export interface Subtitle {
  runs: Run17[]
  text: string
  endpoint?: Endpoint12
}

export interface Run17 {
  text: string
  bold: boolean
  italics: boolean
  strikethrough: boolean
  endpoint?: Endpoint11
}

export interface Endpoint11 {
  type: string
  payload: Payload13
  metadata: Metadata13
}

export interface Payload13 {
  browseId: string
  browseEndpointContextSupportedConfigs: BrowseEndpointContextSupportedConfigs8
}

export interface BrowseEndpointContextSupportedConfigs8 {
  browseEndpointContextMusicConfig: BrowseEndpointContextMusicConfig8
}

export interface BrowseEndpointContextMusicConfig8 {
  pageType: string
}

export interface Metadata13 {
  api_url: string
}

export interface Endpoint12 {
  type: string
  payload: Payload14
  metadata: Metadata14
}

export interface Payload14 {
  browseId: string
  browseEndpointContextSupportedConfigs: BrowseEndpointContextSupportedConfigs9
}

export interface BrowseEndpointContextSupportedConfigs9 {
  browseEndpointContextMusicConfig: BrowseEndpointContextMusicConfig9
}

export interface BrowseEndpointContextMusicConfig9 {
  pageType: string
}

export interface Metadata14 {
  api_url: string
}

export interface ThumbnailOverlay {
  type: string
  content: Content8
  content_position: string
  display_style: string
}

export interface Content8 {
  type: string
  endpoint: Endpoint13
  play_icon_type: string
  pause_icon_type: string
  play_label: string
  pause_label: string
  icon_color: number
}

export interface Endpoint13 {
  type: string
  payload: Payload15
  metadata: Metadata15
}

export interface Payload15 {
  playlistId: string
  params?: string
  videoId?: string
  index?: number
  loggingContext?: LoggingContext6
  watchEndpointMusicSupportedConfigs?: WatchEndpointMusicSupportedConfigs6
}

export interface LoggingContext6 {
  vssLoggingContext: VssLoggingContext6
}

export interface VssLoggingContext6 {
  serializedContextData: string
}

export interface WatchEndpointMusicSupportedConfigs6 {
  watchEndpointMusicConfig: WatchEndpointMusicConfig6
}

export interface WatchEndpointMusicConfig6 {
  musicVideoType: string
}

export interface Metadata15 {
  api_url: string
}

export interface Author {
  name: string
  channel_id: string
  endpoint: Endpoint14
}

export interface Endpoint14 {
  type: string
  payload: Payload16
  metadata: Metadata16
}

export interface Payload16 {
  browseId: string
  browseEndpointContextSupportedConfigs: BrowseEndpointContextSupportedConfigs10
}

export interface BrowseEndpointContextSupportedConfigs10 {
  browseEndpointContextMusicConfig: BrowseEndpointContextMusicConfig10
}

export interface BrowseEndpointContextMusicConfig10 {
  pageType: string
}

export interface Metadata16 {
  api_url: string
}

export interface Endpoint15 {
  type: string
  payload: Payload17
  metadata: Metadata17
}

export interface Payload17 {
  browseId: string
  params: string
  browseEndpointContextSupportedConfigs: BrowseEndpointContextSupportedConfigs11
}

export interface BrowseEndpointContextSupportedConfigs11 {
  browseEndpointContextMusicConfig: BrowseEndpointContextMusicConfig11
}

export interface BrowseEndpointContextMusicConfig11 {
  pageType: string
}

export interface Metadata17 {
  api_url: string
}

export interface BottomText {
  runs: Run18[]
  text: string
}

export interface Run18 {
  text: string
  bold: boolean
  italics: boolean
  strikethrough: boolean
}

export interface Header2 {
  type: string
  title: Title8
  more_content?: MoreContent
}

export interface Title8 {
  runs: Run19[]
  text: string
  endpoint?: Endpoint17
}

export interface Run19 {
  text: string
  bold: boolean
  italics: boolean
  strikethrough: boolean
  endpoint?: Endpoint16
}

export interface Endpoint16 {
  type: string
  payload: Payload18
  metadata: Metadata18
}

export interface Payload18 {
  browseId: string
  params: string
  browseEndpointContextSupportedConfigs: BrowseEndpointContextSupportedConfigs12
}

export interface BrowseEndpointContextSupportedConfigs12 {
  browseEndpointContextMusicConfig: BrowseEndpointContextMusicConfig12
}

export interface BrowseEndpointContextMusicConfig12 {
  pageType: string
}

export interface Metadata18 {
  api_url: string
}

export interface Endpoint17 {
  type: string
  payload: Payload19
  metadata: Metadata19
}

export interface Payload19 {
  browseId: string
  params: string
  browseEndpointContextSupportedConfigs: BrowseEndpointContextSupportedConfigs13
}

export interface BrowseEndpointContextSupportedConfigs13 {
  browseEndpointContextMusicConfig: BrowseEndpointContextMusicConfig13
}

export interface BrowseEndpointContextMusicConfig13 {
  pageType: string
}

export interface Metadata19 {
  api_url: string
}

export interface MoreContent {
  type: string
  text: string
  endpoint: Endpoint18
}

export interface Endpoint18 {
  type: string
  payload: Payload20
  metadata: Metadata20
}

export interface Payload20 {
  browseId: string
  params: string
  browseEndpointContextSupportedConfigs: BrowseEndpointContextSupportedConfigs14
}

export interface BrowseEndpointContextSupportedConfigs14 {
  browseEndpointContextMusicConfig: BrowseEndpointContextMusicConfig14
}

export interface BrowseEndpointContextMusicConfig14 {
  pageType: string
}

export interface Metadata20 {
  api_url: string
}
