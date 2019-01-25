import * as React from "react"
import styled, { css } from "styled-components"
import Dayzed from "dayzed"
import Stack from "@kiwicom/orbit-components/lib/Stack"
import Button from "@kiwicom/orbit-components/lib/Button"
import Text from "@kiwicom/orbit-components/lib/Text"
import InputField from "@kiwicom/orbit-components/lib/InputField"
import ChevronLeft from "@kiwicom/orbit-components/lib/icons/ChevronLeft"
import ChevronRight from "@kiwicom/orbit-components/lib/icons/ChevronRight"
import defaultTheme from "@kiwicom/orbit-components/lib/defaultTokens"
import mq from "@kiwicom/orbit-components/lib/utils/mediaQuery"
import { format } from "date-fns"

const today = new Date()
const day = 60 * 60 * 24 * 1000
const minDate = new Date(today.getTime() - day)

const monthNamesShort = [
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
  "Dec"
]

const weekdayNamesShort = [
  "Sun",
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat"
]

const StyledDatePickerWrapper = styled.div`
  position: relative;
  width: 100%;
`
const StyledDatePicker = styled.div`
  position: absolute;
  top: ${({ theme }) =>
    `calc(${theme.orbit.heightInputNormal} + ${
      theme.orbit.spaceXXSmall
    })`};
  z-index: 999;
  box-sizing: border-box;
  background: ${({ theme }) => theme.orbit.paletteWhite};
  padding: 24px;
  border-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.orbit.boxShadowElevatedLevel1};
  right: 0;

  ${mq.largeMobile(css`
    max-width: 400px;
  `)}
`

StyledDatePicker.defaultProps = {
  theme: defaultTheme
}

const StyledDay = styled.button`
  display: inline-block;
  width: 50px;
  height: 50px;
  line-height: 50px;
  font-size: 16px;
  color: ${({ selectable, theme }) =>
    selectable
      ? theme.orbit.paletteInkNormal
      : theme.orbit.paletteInkLighter};
  font-weight: 700;
  border: 0;
  padding: 0;
  background: ${({ selected, theme }) =>
    selected && theme.orbit.paletteBlueNormal};
  border-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};

  color: ${({ selected, theme }) =>
    selected && theme.orbit.paletteWhite};

  ${({ selectable, selected, theme }) =>
    selectable &&
    css`
      cursor: pointer;

      :hover,
      :focus,
      :active {
        outline: none;
        background: ${!selected && theme.orbit.paletteCloudLight};
      }
    `};
`

const StyledCalendarPart = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
`
const StyledCalendarYear = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`
const StyledCalendarWeek = styled.div`
  display: flex;
  flex-direction: row;
`

const StyledCalendarWeekday = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;
`

// TODO: range selected if wanted

const DatePicker = ({
  label,
  onFocus,
  onBlur,
  onDateSelected,
  currentDate = "",
  shown,
  openRef
}) => (
  <StyledDatePickerWrapper ref={openRef}>
    <InputField
      inlineLabel
      label={label}
      onFocus={onFocus}
      onBlur={onBlur}
      value={format(currentDate, "MM/DD/YYYY")}
      readOnly
    />
    {shown && (
      <Dayzed
        onDateSelected={onDateSelected}
        selected={currentDate}
        monthsToDisplay={1}
        minDate={minDate}
        render={({
          calendars,
          getBackProps,
          getForwardProps,
          getDateProps
        }) => {
          if (calendars.length) {
            return (
              <StyledDatePicker>
                <Stack direction="row" justify="between">
                  <Button
                    {...getBackProps({ calendars })}
                    icon={<ChevronLeft />}
                    type="secondary"
                    size="small"
                  />
                  <Button
                    {...getForwardProps({ calendars })}
                    icon={<ChevronRight />}
                    type="secondary"
                    size="small"
                  />
                </Stack>
                <Stack direction="row" spacing="extraLoose">
                  {calendars.map(calendar => (
                    <StyledCalendarPart
                      key={`${calendar.month}${calendar.year}`}
                    >
                      <StyledCalendarYear>
                        <Text align="center" weight="bold">
                          {monthNamesShort[calendar.month]}{" "}
                          {calendar.year}
                        </Text>
                      </StyledCalendarYear>
                      <StyledCalendarWeek>
                        {weekdayNamesShort.map(weekday => (
                          <StyledCalendarWeekday
                            key={`${calendar.month}${
                              calendar.year
                            }${weekday}`}
                          >
                            <Text>{weekday}</Text>
                          </StyledCalendarWeekday>
                        ))}
                      </StyledCalendarWeek>
                      {calendar.weeks.map((week, weekIndex) =>
                        week.map((dateObj, index) => {
                          const key = `${calendar.month}${
                            calendar.year
                          }${weekIndex}${index}`
                          if (!dateObj) {
                            return <StyledDay key={key} />
                          }
                          const {
                            date,
                            selected,
                            selectable
                          } = dateObj
                          return (
                            <StyledDay
                              key={key}
                              {...getDateProps({ dateObj })}
                              selectable={selectable}
                              selected={selected}
                            >
                              {date.getDate()}
                            </StyledDay>
                          )
                        })
                      )}
                    </StyledCalendarPart>
                  ))}
                </Stack>
              </StyledDatePicker>
            )
          }
          return null
        }}
      />
    )}
  </StyledDatePickerWrapper>
)

export default DatePicker
