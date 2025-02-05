import type { ComponentMultiStyle } from "@yamada-ui/core"
import { transparentizeColor, isGray, isAccessible } from "@yamada-ui/utils"

export const Pagination: ComponentMultiStyle = {
  baseStyle: {
    container: {
      _disabled: {
        cursor: "not-allowed",
      },
    },
    inner: {
      flex: 1,
    },
    item: {
      px: 1,
      color: ["blackAlpha.700", "whiteAlpha.700"],
      rounded: "md",
      transitionProperty: "common",
      transitionDuration: "slower",
      _selected: { cursor: "default", pointerEvents: "none" },
      _focus: {
        outline: "none",
      },
      _disabled: {
        opacity: 0.4,
        cursor: "not-allowed",
        boxShadow: "none",
      },
      _hover: {
        _disabled: {
          bg: ["initial", "initial"],
        },
      },
      _focusVisible: {
        boxShadow: "outline",
      },
    },
    first: {},
    last: {},
    prev: {},
    next: {},
    dots: { pointerEvents: "none" },
  },

  variants: {
    solid: ({ colorScheme: c = "primary" }) => ({
      item: {
        border: "1px solid",
        borderColor: "border",
        _selected: {
          bg: isGray(c)
            ? [`${c}.50`, `${c}.700`]
            : [isAccessible(c) ? `${c}.400` : `${c}.500`, `${c}.600`],
          borderColor: isGray(c)
            ? [`${c}.50`, `${c}.700`]
            : [isAccessible(c) ? `${c}.400` : `${c}.500`, `${c}.600`],
          color: [isGray(c) || isAccessible(c) ? `black` : `white`, `white`],
          _hover: {
            bg: isGray(c)
              ? [`${c}.100`, `${c}.800`]
              : [isAccessible(c) ? `${c}.500` : `${c}.600`, `${c}.700`],
          },
        },
        _hover: {
          bg: ["blackAlpha.50", "whiteAlpha.50"],
          _disabled: {
            bg: ["initial", "initial"],
          },
        },
        _active: {
          bg: ["blackAlpha.100", "whiteAlpha.100"],
        },
      },
      dots: {
        border: "0",
      },
    }),
    outline: ({ colorScheme: c = "primary" }) => {
      return {
        item: {
          border: "1px solid",
          borderColor: "border",
          _selected: {
            bg: "transparent",
            borderColor: [`${c}.600`, `${c}.500`],
            color: isGray(c)
              ? ["blackAlpha.800", "whiteAlpha.700"]
              : [`${c}.600`, `${c}.500`],
            _hover: {
              bg: ["transparent", "transparent"],
            },
          },
          _hover: {
            bg: ["blackAlpha.50", "whiteAlpha.50"],
            _disabled: {
              bg: ["initial", "initial"],
            },
          },
          _active: {
            bg: ["blackAlpha.100", "whiteAlpha.100"],
          },
        },
        dots: {
          border: "0",
        },
      }
    },
    ghost: ({ theme: t, colorMode: m, colorScheme: c = "primary" }) => {
      return {
        item: {
          _selected: {
            bg: isGray(c) ? undefined : "transparent",
            fontWeight: "semibold",
            color: isGray(c)
              ? ["blackAlpha.800", "whiteAlpha.700"]
              : [`${c}.600`, `${c}.500`],
          },
          _hover: {
            bg: [`${c}.50`, transparentizeColor(`${c}.600`, 0.12)(t, m)],
          },
          _active: {
            bg: isGray(c)
              ? [`${c}.300`, `whiteAlpha.300`]
              : [`${c}.200`, transparentizeColor(`${c}.200`, 0.24)(t, m)],
          },
        },
      }
    },
    unstyled: {
      container: { gap: 0 },
      inner: { gap: 0 },
      item: { bg: "none", color: "inherit", minW: "auto", minH: "auto" },
      _ripple: { display: "none" },
    },
  },

  sizes: {
    xs: {
      container: {
        gap: "xs",
      },
      inner: {
        gap: "xs",
      },
      item: {
        minW: 6,
        minH: 6,
        fontSize: "xs",
      },
    },
    sm: {
      container: {
        gap: "xs",
      },
      inner: {
        gap: "xs",
      },
      item: {
        minW: 7,
        minH: 7,
        fontSize: "sm",
      },
    },
    md: {
      container: {
        gap: "sm",
      },
      inner: {
        gap: "sm",
      },
      item: {
        minW: 8,
        minH: 8,
        fontSize: "md",
      },
    },
    lg: {
      container: {
        gap: "sm",
      },
      inner: {
        gap: "sm",
      },
      item: {
        minW: 10,
        minH: 10,
        fontSize: "lg",
      },
    },
    xl: {
      container: {
        gap: "md",
      },
      inner: {
        gap: "md",
      },
      item: {
        minW: 12,
        minH: 12,
        fontSize: "xl",
      },
    },
  },

  defaultProps: {
    variant: "solid",
    size: "md",
    colorScheme: "primary",
  },
}
