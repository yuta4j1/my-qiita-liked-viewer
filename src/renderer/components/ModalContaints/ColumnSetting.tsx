import * as React from 'react'
import { useState } from 'react'
import styled from '@/theme'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ColumnState } from '@/types'
import {
  faChevronRight,
  faTimesCircle
} from '@fortawesome/free-solid-svg-icons'

const ColumnSettingComponent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 32px;
  padding: 8px;
  background-color: #ffffff;
`

const TextRow = styled.div`
  display: flex;
`

const Title = styled.p`
  color: #9e9e9e;
  font-size: 0.8em;
`

const ColumnInput = styled.input`
  padding: 3px;
  border-radius: 8px 0px 0px 8px;
  border-top: solid 1 #f5f5f5;
  border-left: solid 1 #f5f5f5;
  border-bottom: solid 1 #f5f5f5;
`

const InputAddon = styled.div`
  border-radius: 0px 8px 8px 0px;
  background-color: #ffffff;
  cursor: pointer;
`

const BadgeRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 16px;
  padding: 8px;
`

const Badge = styled.div`
  margin: 2px;
  padding: 2px;
  border-radius: 8px;
  background-color: #f5f5f5;
`

const BadgeCloser = styled.span`
  background-color: #bdbdbd;
  border-radius: 50%;
  cursor: pointer;
`

type ColumnSettingProps = {
  columnState: ColumnState
  setColumn: (state: ColumnState) => void
}

const ColumnSetting: React.FC<ColumnSettingProps> = props => {
  const [columnText, setColumnText] = useState('')

  const [columnBadges, setColumnBadge] = useState(props.columnState)

  const handleAddonClick = () => {
    const c = [...columnBadges, columnText]
    setColumnBadge(c)
    props.setColumn(c)
    setColumnText('')
  }

  const deleteBadge = (columnText: string) => {
    const c = columnBadges.filter(v => v !== columnText)
    setColumnBadge(c)
    props.setColumn(c)
  }

  const renderBadges = () => {
    return columnBadges.map((columnText: string, i: number) => (
      <Badge key={i}>
        {columnText}{' '}
        <BadgeCloser onClick={e => deleteBadge(columnText)}>
          <FontAwesomeIcon icon={faTimesCircle} />
        </BadgeCloser>
      </Badge>
    ))
  }

  return (
    <ColumnSettingComponent>
      <Title>カラム設定</Title>
      <TextRow>
        <ColumnInput
          type="text"
          value={columnText}
          onChange={e => setColumnText(e.target.value)}
        />
        <InputAddon onClick={e => handleAddonClick()}>
          <span>
            <FontAwesomeIcon icon={faChevronRight} />
          </span>
        </InputAddon>
      </TextRow>
      <BadgeRow>{renderBadges()}</BadgeRow>
    </ColumnSettingComponent>
  )
}

export default ColumnSetting
