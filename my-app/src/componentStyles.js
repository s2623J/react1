import styled from '@emotion/styled';

export const Header = styled.h1({
    padding:    16,
    color:      'hotpink'
})

export const Photo = styled.img( props => props.isActive ? fullScreenStyles : thumbnailStyles);

export const TileView = styled.div( props => ({ // Allows for SASS-like variable passing
    display:                'grid',
    padding:                props.spacing,
    gridGap:                props.spacing,
    gridTemplateColumns:    `repeat(auto-fill, minmax(${props.minCellWidth}px, 1fr))`
}))

export const Frame = styled('div')({
    position:           'fixed',
    top:                0,
    bottom:             0,
    left:               0,
    right:              0,
    backgroundColor:    'hsla(0, 0%, 100%, 0.96)',
    zIndex:             5
})

TileView.defaultProps = {
    spacing:        16,
    minCellWidth:   240
}

const thumbnailStyles = {
    display:    'block',
    width:      '100%',
    objectFit:  'cover',
    cursor:     'zoom-in'
}

const fullScreenStyles = {
    position:   'fixed',
    top:        0,
    bottom:     0,
    left:       0,
    right:      0,
    width:     '80vw',
    margin:     'auto',
    zIndex:     10,
    cursor:     'zoom-out'
}