// TODO: менять класс кнопки сортировки при клике на кнопку сортировки в шапке таблицы

// синхронизирует смещение нижней таблицы с таблице у которой scrollbar
function syncScroll () {
	const scrollWrap = document.querySelector ( ".wrap-table-scroll" );
	const followScroll = document.querySelector ( ".wrap-table-scroll-follow" );

	if ( !scrollWrap && !followScroll ) {
		return false;
	}

	scrollWrap.addEventListener ( "scroll", ( e ) => {
		followScroll.scrollLeft = e.target.scrollLeft;
	} );
}

// функция проверяет если выбран checkbox в tr,  то выделяет tr
function trCheckbox () {
	// выбрать все checkbox в таблице кроме checkbox с классом checkbox-all
	const checkboxes = document.querySelectorAll ( ".cell__checkbox:not(.checkbox-all)" );

	if ( checkboxes.length <= 0 ) {
		return false;
	}

	checkboxes.forEach ( ( checkbox ) => {
		checkbox.addEventListener ( "change", ( e ) => {
			const tr = e.target.closest ( ".tr" );

			// если есть такой элемент у родителя то выделить его
			if ( tr ) {
				// если checkbox выбран то выделить tr
				if ( checkbox.checked ) {
					elChangeClass ( tr, "tr-checked", "add" );
				} else {
					elChangeClass ( tr, "tr-checked", "remove" );
				}
			}

		} );
	} );
}

// инициализация checkbox_all
function checkboxAll () {
	const checkboxes = document.querySelectorAll ( ".checkbox-all" );

	if ( checkboxes.length === 0 ) {
		return false;
	}

	checkboxes.forEach ( checkbox => {
		checkbox.addEventListener ( 'change', ( e ) => {
			const checked = checkbox.checked;
			const table = checkbox.closest ( '.table' );
			// выбрать все checkbox в таблице кроме checkbox с классом checkbox-all
			const checkboxesTable = table.querySelectorAll ( ".cell__checkbox:not(.checkbox-all)" );

			// если checkbox выбран то выделить tr
			if ( checked ) {
				checkboxesTable.forEach ( item => {
					item.checked = true;
					const tr = item.closest ( '.tr' );

					// если есть такой элемент у родителя то выделить его
					if ( tr ) {
						elChangeClass ( tr, "tr-checked", "add" );
					}
				} );
			} else {
				checkboxesTable.forEach ( item => {
					item.checked = false;
					const tr = item.closest ( '.tr' );

					// если есть такой элемент у родителя то выделить его
					if ( tr ) {
						elChangeClass ( tr, "tr-checked", "remove" );
					}
				} );
			}
		} );
	} );
}

// инициализация поиска в столбцах
function searchRowInit () {
	const rows = document.querySelectorAll ( '.cell__search' );

	if ( rows.length === 0 ) {
		return false
	}

	rows.forEach ( row => {
		inputHandler ( row );
	} );

	// функция слушает события в input
	function inputHandler ( row ) {
		const input = row.querySelector ( '.cell__input' );
		const reset = row.querySelector ( '.cell__reset' );

		// действия при вводе в поле данных input
		input.addEventListener ( 'input', () => {
			const data = input.value.trim ();

			// если длина строки больше 3х символов то появится кнопка сброса
			// которая удалит содержимое инпута
			if ( data.length > 3 ) {
				resetSwitchActive ( reset, true );
			} else {
				resetSwitchActive ( reset, false );
			}
		} );

		// событие при клике на reset
		// удаляет все содержимое input и прячет кнопку reset
		reset.addEventListener ( 'click', () => {
			input.value = '';
			resetSwitchActive ( reset, false );
		} );
	}

	// переключает класс для reset с активного на неактивный
	function resetSwitchActive ( reset, active = false ) {
		active ? reset.classList.remove ( 'hide' ) : reset.classList.add ( 'hide' );
	}
}

// события при клике на кнопку сортировки
function sortButtonHandler () {
	const buttons = document.querySelectorAll ( '.cell__sort' );

	buttons.forEach ( button => {
		button.addEventListener ( 'click', () => {
			const isAsc = button.classList.contains ( 'cell__sorts--asc' );
			const isDesc = button.classList.contains ( 'cell__sorts--desc' );

			// удаляем все активные классы у кнопок сортировки
			buttons.forEach ( button => {
				elChangeClass ( button, 'cell__sorts--desc', 'remove' );
				elChangeClass ( button, 'cell__sorts--asc', 'remove' );
			} );

			// переключает класс для кнопки сортировки
			switch ( true ) {
				case !isAsc :
					elChangeClass ( button, 'cell__sorts--desc', 'remove' );
					elChangeClass ( button, 'cell__sorts--asc', 'add' );
					break;

				case !isDesc :
					elChangeClass ( button, 'cell__sorts--asc', 'remove' );
					elChangeClass ( button, 'cell__sorts--desc', 'add' );
					break;
			}
		} );
	} );
}

// события для редактируемой строки
function trEditHandler () {
	const tr = document.querySelector ( '.tr--edit' );
	const success = tr.querySelector ( '.cell__button--success' );
	const reset = tr.querySelector ( '.cell__button--error' );
	const inputs = tr.querySelectorAll ( '.cell__input' );

	// события клавиатуры
	tr.addEventListener ( 'keydown', ( e ) => {
		// если нажали Enter сохранить
		if ( e.key === 'Enter' ) {
			saveDataFromInout ( inputs );
		}

		// если нажали Escape отменить все изменения
		if (e.key === 'Escape') {
			tr.classList.remove ( 'tr--edit' );
		}
	} );

	success.addEventListener ( 'click', () => {
		saveDataFromInout ( inputs );
	} );

	reset.addEventListener ( 'click', () => {
		tr.classList.remove ( 'tr--edit' );
	} );

	// функция сохраняет значение во всех input строки tr
	function saveDataFromInout ( inputs ) {
		tr.classList.remove ( 'tr--edit' );

		inputs.forEach ( input => {
			const data = input.value.trim ();
			const parent = input.offsetParent.closest ( '.cell__inner' );
			const cellData = parent.querySelector ( '.cell__data' );

			if ( data !== '' ) {
				cellData.innerHTML = '';

				// разбиваем строку по пробелу на массив
				// возвращаем каждый элемент в отдельном теге span
				// вставляем значение в ячейку
				cellData.innerHTML = data.split ( ' ' ).map ( item => {
					return `<span class="cell__text">${ item }</span>`
				} ).join ( ' ' );
			}
		} );
	}

}

// добавляет/удаляет класс у элемента
function elChangeClass ( elem, cls, action = 'add' ) {
	action === 'add' ? elem.classList.add ( cls ) : elem.classList.remove ( cls );
}

window.onload = function () {
	searchRowInit ();
	checkboxAll ();
	trCheckbox ();
	syncScroll ();
	sortButtonHandler ();
	trEditHandler ();
}
