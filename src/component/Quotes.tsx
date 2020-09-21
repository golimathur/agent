import React from "react";
import Navigation from "../uicomponent/Navigation";
import Chat from "../uicomponent/Chat";
import Header from "../uicomponent/Header";
import Footer from "../uicomponent/Footer";
//import Button from "../uicomponent/Button";
import Search from "../uicomponent/Search";
import { DefaultButton } from "office-ui-fabric-react/lib/Button";
import { Callout, DirectionalHint } from "office-ui-fabric-react/lib/Callout";
import { Calendar, DayOfWeek } from "office-ui-fabric-react/lib/Calendar";
import { FocusTrapZone } from "office-ui-fabric-react/lib/FocusTrapZone";
import { useBoolean } from "@uifabric/react-hooks";
import {
  IButtonStyles,
  IconButton,
  HighContrastSelector,
  Label,
  IContextualMenuProps,
  IIconProps,
  Modal,
} from "office-ui-fabric-react";
import "../App.css";
//import TableQuotes from "../contact/TableQuotes";
import TableApi from "../contact/TableApi";
import ModalPop from "../uicomponent/ModalPop";
import useModal from "../uicomponent/useModal";
import "../uicomponent/pop.css";
// import Taker from "../movie/Taker";

const Quotes = () => {
  return (
    <div>
      {/* <Button /> */}
      <div style={{ float: "right", marginTop: 5, marginRight: 200 }}>
        <Search />
      </div>
      <Header />
      <p className="rep">Quotes</p>
      {/* <div style={{ marginRight: 638,float: 'right' , marginTop: 26 }}>
        <Search />
      </div> */}
      <div style={{ marginLeft: 8, marginTop: "-62px" }}>
        <Navigation />
      </div>
      <div style={{ float: "right", marginTop: -725, marginRight: 400 }}>
        <CalendarButtonExample />
      </div>

      <div style={{ marginLeft: 400, marginTop: -750, float: "left" }}>
        <ButtonSplitCustomExample />
      </div>

      <div style={{ marginLeft: 300, marginTop: -600, width: 120 }}>
        <ul>
         <li> <TableApi /></li>
        </ul>
      </div>

      <div style={{ marginTop: 550 }}>
        <Footer />
      </div>

      <Chat />
    </div>
  );
};

const DayPickerStrings = {
  months: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  shortMonths: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  days: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  shortDays: ["S", "M", "T", "W", "T", "F", "S"],
  goToToday: "Go to today",
  weekNumberFormatString: "Week number {0}",
  prevMonthAriaLabel: "Previous month",
  nextMonthAriaLabel: "Next month",
  prevYearAriaLabel: "Previous year",
  nextYearAriaLabel: "Next year",
  prevYearRangeAriaLabel: "Previous year range",
  nextYearRangeAriaLabel: "Next year range",
  closeButtonAriaLabel: "Close",
};

export interface ICalendarButtonExampleProps {
  isDayPickerVisible?: boolean;
  isMonthPickerVisible?: boolean;
  highlightCurrentMonth?: boolean;
  highlightSelectedMonth?: boolean;
  buttonString?: string;
  showMonthPickerAsOverlay?: boolean;
  showGoToToday?: boolean;
}

let calendarButtonElement: HTMLElement;

export const CalendarButtonExample: React.FunctionComponent<ICalendarButtonExampleProps> = (
  props: ICalendarButtonExampleProps
) => {
  const [showCalendar, { toggle: toggleShowCalendar }] = useBoolean(false);
  const [selectedDate, setSelectedDate] = React.useState<Date>();
  const {
    showMonthPickerAsOverlay = false,
    isDayPickerVisible = true,
    isMonthPickerVisible = true,
    showGoToToday = true,
    buttonString = "7/31/2020",
    highlightCurrentMonth,
    highlightSelectedMonth,
  } = props;
  const onSelectDate = (date: Date): void => {
    toggleShowCalendar();
    setSelectedDate(date);
  };

  return (
    <div>
      <div
        // eslint-disable-next-line react/jsx-no-bind
        ref={(calendarBtn) => (calendarButtonElement = calendarBtn!)}
      >
        <DefaultButton
          onClick={toggleShowCalendar}
          text={
            !selectedDate ? buttonString : selectedDate.toLocaleDateString()
          }
        />
      </div>
      {showCalendar && (
        <Callout
          isBeakVisible={false}
          className="ms-DatePicker-callout"
          gapSpace={0}
          doNotLayer={false}
          target={calendarButtonElement}
          directionalHint={DirectionalHint.bottomLeftEdge}
          onDismiss={toggleShowCalendar}
          setInitialFocus
        >
          <FocusTrapZone
            firstFocusableSelector="ms-DatePicker-day--today"
            isClickableOutsideFocusTrap
          >
            <Calendar
              // eslint-disable-next-line react/jsx-no-bind
              onSelectDate={onSelectDate}
              onDismiss={toggleShowCalendar}
              isMonthPickerVisible={isMonthPickerVisible}
              value={selectedDate!}
              firstDayOfWeek={DayOfWeek.Sunday}
              strings={DayPickerStrings}
              isDayPickerVisible={isDayPickerVisible}
              highlightCurrentMonth={highlightCurrentMonth}
              highlightSelectedMonth={highlightSelectedMonth}
              showMonthPickerAsOverlay={showMonthPickerAsOverlay}
              showGoToToday={showGoToToday}
            />
          </FocusTrapZone>
        </Callout>
      )}
    </div>
  );
};

export interface IButtonExampleProps {
  disabled?: boolean;
  checked?: boolean;
}

const customSplitButtonStyles: IButtonStyles = {
  splitButtonMenuButton: {
    backgroundColor: "white",
    width: 28,
    border: "none",
  },
  splitButtonMenuIcon: { fontSize: "7px" },
  splitButtonDivider: {
    backgroundColor: "#c8c8c8",
    width: 1,
    right: 26,
    position: "absolute",
    top: 4,
    bottom: 4,
  },
  splitButtonContainer: {
    selectors: {
      [HighContrastSelector]: { border: "none" },
    },
  },
};

const addIcon: IIconProps = { iconName: "Add" };

export const ButtonSplitCustomExample: React.FunctionComponent<IButtonExampleProps> = (
  props
) => {
  const { disabled, checked } = props;
  const { isShowing, toggle } = useModal();

  return (
    <div className="Mod">
      <IconButton
        split
        iconProps={addIcon}
        splitButtonAriaLabel="See 2 options"
        aria-roledescription="split button"
        styles={customSplitButtonStyles}
        ariaLabel="New item"
        onClick={toggle}
        disabled={disabled}
        checked={checked}
      />

      <ModalPop isShowing={isShowing} hide={toggle} />
    </div>
  );
};

function _alertClicked(): void {
  alert("Clicked");
}

export default Quotes;
