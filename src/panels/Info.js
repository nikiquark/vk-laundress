
import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line
import { platform, IOS } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';

import Button from '@vkontakte/vkui/dist/components/Button/Button'
import Div from '@vkontakte/vkui/dist/components/Div/Div'
import FormLayout from '@vkontakte/vkui/dist/components/FormLayout/FormLayout'
import Input from '@vkontakte/vkui/dist/components/Input/Input'
import Select from '@vkontakte/vkui/dist/components/Select/Select'
import Checkbox from '@vkontakte/vkui/dist/components/Checkbox/Checkbox'
import Link from '@vkontakte/vkui/dist/components/Link/Link'
import './Info.css';

//const osName = platform();

const Info = props => (
	<Panel id={props.id}>
		<PanelHeader>
			Профиль
		</PanelHeader>
		<FormLayout>
			<Input top="Фамилия" placeholder="Усманов" />
			<Input top="Комната" placeholder="123б" />
			<Select top="Факультет" placeholder="Выберите факультет">
              <option value="ff">ФФ</option>
              <option value="fit">ФИТ</option>
            </Select>
			</FormLayout>
		<Div>
			<Button stretched mode="commerce" size="l" onClick={props.go} data-to="default">
			СОХРАНИТЬ
			</Button>
		</Div>
	</Panel>
);

Info.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Info;
