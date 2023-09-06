if ('Notification' in window) {

    if (Notification.permission === 'granted') {
        notify();
    } else {
        Notification.requestPermission().then((res) => {
            if (res === 'granted') {
                notify();
            } else if (res === 'denied') {
                console.log('Доступ к уведомлениям отклонен');
            } else if (res === 'default') {
                console.log('Разрешение на уведомления не получено');
            }
        })
    }

} else {
    console.error('Уведомления не поддерживаются');
}

function notify() {
    new Notification('Привет!');
}