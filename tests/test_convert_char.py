"""Test coversion of unicode character into base ASCII Latin character.

Using pytest-benchmark fixture https://pypi.org/project/pytest-benchmark/

Typing the `benchmark` fixture as `Any` for convienience.
"""
from typing import Any

from asciize.entities.convert_character import character_conversion
from asciize.entities.convert_character import convert_multiple_latins
from asciize.entities.convert_character import convert_single_latins
from asciize.entities.convert_character import direct_remove
from asciize.entities.convert_character import remove_accents


def test_char_converson() -> None:
    """Test Americanizing character conversion.

    This list contains all types of characters found in long lists of
    names generated by the python Faker library with the
    tests/discovery/discover_test_cases.py tool.
    """
    tests = [
        ["José", "Jose"],
        ["Cañón", "Canon"],
        # Common accents on Latin characters
        # http://www.madore.org/~david/misc/unitest/#accents
        # a
        ["à", "a"],
        ["á", "a"],
        ["â", "a"],
        ["ã", "a"],
        ["ä", "a"],
        ["ā", "a"],
        ["ă", "a"],
        ["ą", "a"],
        ["ȧ", "a"],
        ["ǎ", "a"],
        ["ȁ", "a"],
        ["ȃ", "a"],
        # e
        ["è", "e"],
        ["é", "e"],
        ["ê", "e"],
        ["ẽ", "e"],
        ["ë", "e"],
        ["ē", "e"],
        ["ĕ", "e"],
        ["ę", "e"],
        ["ė", "e"],
        ["ě", "e"],
        ["ȅ", "e"],
        ["ȇ", "e"],
        # i
        ["ì", "i"],
        ["í", "i"],
        ["î", "i"],
        ["ĩ", "i"],
        ["ï", "i"],
        ["ī", "i"],
        ["ĭ", "i"],
        ["į", "i"],
        ["i", "i"],
        ["ǐ", "i"],
        ["ȉ", "i"],
        ["ȋ", "i"],
        # o
        ["ò", "o"],
        ["ó", "o"],
        ["ô", "o"],
        ["õ", "o"],
        ["ö", "o"],
        ["ō", "o"],
        ["ŏ", "o"],
        ["ǫ", "o"],
        ["ȯ", "o"],
        ["ő", "o"],
        ["ǒ", "o"],
        ["ȍ", "o"],
        ["ȏ", "o"],
        # u
        ["ù", "u"],
        ["ú", "u"],
        ["û", "u"],
        ["ũ", "u"],
        ["ü", "u"],
        ["ū", "u"],
        ["ŭ", "u"],
        ["ų", "u"],
        ["ű", "u"],
        ["ǔ", "u"],
        ["ȕ", "u"],
        ["ȗ", "u"],
        ["ū", "u"],
        # y
        ["ỳ", "y"],
        ["ý", "y"],
        ["ŷ", "y"],
        ["ỹ", "y"],
        ["ÿ", "y"],
        ["ȳ", "y"],
        ["ẏ", "y"],
        # harder
        ["ø", "o"],
        ["ø", "o"],
        # consonants
        ["ç", "c"],
        ["č", "c"],
        ["ģ", "g"],
        ["ğ", "g"],
        ["ķ", "k"],
        ["ļ", "l"],
        ["ł", "l"],
        ["ĺ", "l"],
        ["ņ", "n"],
        ["ń", "n"],
        ["ñ", "n"],
        ["ṛ", "r"],
        ["ŕ", "r"],
        ["š", "s"],
        ["ť", "t"],
        ["ŵ", "w"],
        ["ẅ", "w"],
        ["ẃ", "w"],
        ["ẁ", "w"],
        ["ž", "z"],
        ["ź", "z"],
        ["ż", "z"],
        ["ß", "ss"],
        ["ẞ", "SS"],
        ["æ", "ae"],
        [" ", " "],
        # Synthetic Czech/Norweian/Polish name
        ["Øldřichß, Špłačæk", "Oldrichss, Splacaek"],
        # Non-Latin
        ["英語", ""],
        ["Tiger虎", "Tiger"],
    ]

    for accented, expected in tests:
        print(f"In /{accented}/ Test /{expected}/")
        output = character_conversion(accented)
        assert output == expected


def test_remove_accents(benchmark: Any) -> None:
    """Test remove_accents."""
    accented_character = "ű"  # u with a double acute accent
    unaccented_character = "u"
    result = benchmark(remove_accents, accented_character)
    assert result == unaccented_character


def test_convert_single_latins(benchmark: Any) -> None:
    """Test convert_single_latins."""
    accented_character = "Ø"  # Latin letter O with stroke
    unaccented_character = "O"
    result = benchmark(convert_single_latins, accented_character)
    assert result == unaccented_character


def test_convert_multiple_latins(benchmark: Any) -> None:
    """Test test_convert_multiple_latins."""
    accented_character = "ẞ"  # Latin letter sharp s
    unaccented_characters = "SS"
    result = benchmark(convert_multiple_latins, accented_character)
    assert result == unaccented_characters


def test_direct_remove(benchmark: Any) -> None:
    """Test direct_remove."""
    test_load = "☆"
    empty_string = ""
    result = benchmark(direct_remove, test_load)
    assert result == empty_string


ASCII_CHARACTER = "A"


def test_remove_accents_noop(benchmark: Any) -> None:
    """Test convert_single_latins."""
    test_load = ASCII_CHARACTER
    result = benchmark(remove_accents, test_load)
    assert result == test_load


def test_convert_single_latins_noop(benchmark: Any) -> None:
    """Test convert_single_latins."""
    test_load = ASCII_CHARACTER
    result = benchmark(convert_single_latins, test_load)
    assert result == test_load


def test_convert_multiple_latins_noop(benchmark: Any) -> None:
    """Test test_convert_multiple_latins."""
    test_load = ASCII_CHARACTER
    result = benchmark(convert_multiple_latins, test_load)
    assert result == test_load


def test_direct_remove_noop(benchmark: Any) -> None:
    """Test direct_remove."""
    test_load = ASCII_CHARACTER
    result = benchmark(direct_remove, test_load)
    assert result == test_load
