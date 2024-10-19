WorldgenEvents.remove(event => {
    var rcOreList = [

        'betterend:amber_ore'

    ];

    event.removeOres(props => {

        props.blocks = rcOreList

    });
})