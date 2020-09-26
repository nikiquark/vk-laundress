import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line
import { platform, IOS } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';

import Button from '@vkontakte/vkui/dist/components/Button/Button'
import Div from '@vkontakte/vkui/dist/components/Div/Div'
import FormLayout from '@vkontakte/vkui/dist/components/FormLayout/FormLayout'
// eslint-disable-next-line
import Input from '@vkontakte/vkui/dist/components/Input/Input'
import Select from '@vkontakte/vkui/dist/components/Select/Select'
import Checkbox from '@vkontakte/vkui/dist/components/Checkbox/Checkbox'
import Link from '@vkontakte/vkui/dist/components/Link/Link'

//const osName = platform();

const Record = props => (
	<Panel id={props.id}>
		<PanelHeader>
			Запись
		</PanelHeader>
		<FormLayout>
			<Select top="День недели">
              <option value="1day">Понедельник</option>
              <option value="2day">Вторник</option>
			  <option value="3day">Среда</option>
			  <option value="4day">Четверг</option>
			  <option value="5day">Пятница</option>
			  <option value="6day">Суббота</option>
			  <option value="7day">Воскресенье</option>
            </Select>
			<Select top="Время" placeholder="Время">
              <option value="1time">8:45-10:45</option>
              <option value="2time">12:00-14:00</option>
			  <option value="3time">16:00-18:00</option>
			  <option value="4time">20:00-22:00</option>
			  
            </Select>
			<Checkbox>Согласен с <Link onClick={props.go} data-to="rules">правилами</Link></Checkbox>
			</FormLayout>
		<Div>
			<Button stretched mode="commerce" size="l" onClick={props.go} data-to="default">
				СОХРАНИТЬ
			</Button>
		</Div>
	</Panel>
);

Record.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Record;
