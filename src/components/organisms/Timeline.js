import React, { PureComponent } from "react";
import {
  StyleSheet,
  FlatList,
  View,
  TouchableOpacity,
  I18nManager
} from "react-native";
import {Text} from '_atoms';
import {Colors} from '_styles';

const defaultCircleSize = 10;
const defaultCircleColor = Colors.TEXT_BASIC_COLOR;
const defaultLineWidth = 2;
const defaultLineColor = Colors.TEXT_BASIC_COLOR;
const defaultDotColor = "white";
const defaultInnerCircle = "none";
const isRtl = I18nManager.isRTL;

export default class Timeline extends PureComponent {
  constructor(props, context) {
    super(props, context);

    this._renderItem = this._renderItem.bind(this);
    this.renderTime = (this._renderTime).bind(this);
    this.renderDetail = (this._renderDetail).bind(this);
    this.renderCircle = (this._renderCircle).bind(this);
    this.renderEvent = this._renderEvent.bind(this);

    this.state = {
      data: this.props.data,
      x: 0,
      width: 0
    };
  }
  uuidv4(){
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <FlatList
          style={[styles.listview, this.props.listViewStyle]}
          contentContainerStyle={this.props.listViewContainerStyle}
          data={this.state.data}
          renderItem={this._renderItem}
          keyExtractor={(item, index) => index + ""}
          listKey={()=>uuidv4()}
          ListFooterComponent={this.props.children}
          ListFooterComponentStyle={this.props.footerStyle}
          ListHeaderComponent={this.props.header}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  }

  _renderItem({ item, index }) {
    return (<View key={index}>
                <View style={[styles.rowContainer, this.props.rowContainerStyle]}>
                    {this.renderTime(item, index)}
                    {this.renderEvent(item, index)}
                    {this.renderCircle(item, index)}
                </View>
            </View>);
  }

  _renderTime(rowData, rowID) {
    var timeWrapper = {
        alignItems: "flex-end"
    };
    return (
      <View style={timeWrapper}>
        <View style={[styles.timeContainer, this.props.timeContainerStyle]}>
          <Text style={[styles.time, this.props.timeStyle]} category='p' weight='medium'>
            {rowData.time}
          </Text>
        </View>
      </View>
    );
  }

  _renderEvent(rowData, rowID) {
    const lineWidth = rowData.lineWidth
      ? rowData.lineWidth
      : this.props.lineWidth;
    const isLast = this.props.renderFullLine
      ? !this.props.renderFullLine
      : this.state.data.slice(-1)[0] === rowData;
    const lineColor = isLast
      ? "rgba(0,0,0,0)"
      : rowData.lineColor
      ? rowData.lineColor
      : this.props.lineColor;
    let opStyle = null;
    
    opStyle = {
        borderColor: lineColor,
        borderLeftWidth: 3,
        borderRightWidth: 0,
        marginLeft: 17,
        paddingLeft: 17
    };

    return (
      <View
        style={[
          styles.details,
          opStyle,
          this.props.eventContainerStyle,
          rowData.eventContainerStyle
        ]}
        onLayout={evt => {
          if (!this.state.x && !this.state.width) {
            const { x, width } = evt.nativeEvent.layout;
            this.setState({ x, width });
          }
        }}
      >
        <TouchableOpacity
          disabled={this.props.onEventPress == null}
          style={[this.props.detailContainerStyle,{height:50}]}
          onPress={() =>
            this.props.onEventPress ? this.props.onEventPress(rowData) : null
          }
        >
          <View style={[this.props.eventDetailStyle]}>
            {this.renderDetail(rowData, rowID)}
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  _renderDetail(rowData, rowID) {
    return (
      <View style={[styles.container]}>
        <Text category={ rowData.category ? rowData.category : 'h4'} status={rowData.status ? rowData.status : null} weight={rowData.weight ? rowData.weight : "medium"}>
          {rowData.title}
        </Text>
        <Text category='s2' status={rowData.status ? rowData.status : null}  >
          {rowData.description}
        </Text>
      </View>
    );
  }

  _renderCircle(rowData, rowID) {
    var circleSize = defaultCircleSize;
    var circleColor = rowData.circleColor
      ? rowData.circleColor
      : this.props.circleColor
      ? this.props.circleColor
      : defaultCircleColor;
    var lineWidth = rowData.lineWidth
      ? rowData.lineWidth
      : this.props.lineWidth
      ? this.props.lineWidth
      : defaultLineWidth;

    var circleStyle = null;

    circleStyle = isRtl ? {
        width: this.state.width ? circleSize : 0,
        height: this.state.width ? circleSize : 0,
        borderRadius: circleSize / 2,
        backgroundColor: circleColor,
        right: this.state.width - circleSize / 2 - (lineWidth - 1) / 2
    } : {
        width: this.state.x ? circleSize : 0,
        height: this.state.x ? circleSize : 0,
        borderRadius: circleSize / 2,
        backgroundColor: circleColor,
        left: this.state.x - circleSize / 2 + (lineWidth - 1) / 2
    };

    var innerCircle = null;
    const dotSize = this.props.dotSize
        ? this.props.dotSize
        : circleSize / 2;
    let dotStyle = {
        height: dotSize,
        width: dotSize,
        borderRadius: circleSize / 4,
        backgroundColor: rowData.dotColor
        ? rowData.dotColor
        : this.props.dotColor
        ? this.props.dotColor
        : defaultDotColor
    };
    innerCircle = <View style={[styles.dot, dotStyle]} />;
    return (
      <View style={[styles.circle, circleStyle, this.props.circleStyle]}>
        {innerCircle}
      </View>
    );
  }
}

Timeline.defaultProps = {
  circleSize: defaultCircleSize,
  circleColor: defaultCircleColor,
  lineWidth: defaultLineWidth,
  lineColor: defaultLineColor,
  innerCircle: defaultInnerCircle,
  columnFormat: "single-column-left",
  showTime: true,
  isAllowFontScaling: true
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // maxHeight:208
  },
  listview: {
    flex: 1,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  timeContainer: {
    minWidth: 45
  },
  time: {
    textAlign: "right",
    overflow: "hidden"
  },
  circle: {
    width: 16,
    height: 16,
    borderRadius: 10,
    zIndex: 1,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center"
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: defaultDotColor
  },
  details: {
    borderLeftWidth: defaultLineWidth,
    flexDirection: "column",
    flex: 1
  }
});
