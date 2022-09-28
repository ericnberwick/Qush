import pytest
from two import gen

def test_with_n_0():
    assert gen(0) == []

def test_with_n_1():
    assert gen(1) == [[1]]

def test_with_n_3():
    assert gen(3) == [[1], [1,2], [1,2,3]]

def test_with_n_negative():
    assert gen(-3) == []

def test_with_n_as_float():
    """check that an exception is raised if a float number is passed instead of an int"""
    with pytest.raises(Exception):
        assert gen(2.5)